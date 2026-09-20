"""Mechanical lesson linter.

Everything `sat-alignment` used to check by eye that a computer can check
exactly. Run this before spending an agent call on a style audit: if this is
clean, the only things left are judgement calls.

    python scripts/lint_lesson.py                 # every lesson that is not `planned`
    python scripts/lint_lesson.py 1.3 1.4         # named lessons
    python scripts/lint_lesson.py --level 1       # a whole level
    python scripts/lint_lesson.py --strict        # warnings count as failures

Exit code is 1 if any lesson has an error, 0 otherwise.
"""

from __future__ import annotations

import argparse
import re
import sys
from difflib import SequenceMatcher
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "curriculum" / "manifest.yml"
DOCS = ROOT / "docs"

REQUIRED_SECTIONS = [
    "## The idea",
    "## Worked examples",
    "## Where students go wrong",
    "## Practice",
    "## Answers and solutions",
    "## Tutor notes",
]

FRONTMATTER_KEYS = [
    "lesson_id", "title", "level", "domain",
    "prereqs", "est_minutes", "status", "verified_by",
]

BANNED_WORDS = ["simply", "just", "obviously", "of course", "easy", "clearly", "trivial"]

# `easy` is banned as filler prose but is legitimate as a difficulty label.
BANNED_EXEMPT = re.compile(r"chip-(easy|medium|hard)|Set A|routine|difficulty")

EMOJI = re.compile(
    "[\U0001F300-\U0001FAFF\U00002600-\U000027BF\U00002B00-\U00002BFF\U0000FE0F]"
)

SPR_MARK = "*(student-produced response)*"

# Verbatim instruction prose from the template. These are notes to the agent
# building the lesson, not content. If any survives into a finished lesson, a
# student reads the build instructions.
TEMPLATE_BOILERPLATE = [
    "One or two sentences: how many questions",
    "copied verbatim from the manifest",
    "Teach the concept in plain language first",
    "Where the built-in graphing calculator does this faster",
    "Question statement, written in genuine SAT phrasing",
    "Question statement.",
    "What a strong test-taker notices first, before computing",
    "Step, with the reason for the step.",
    "Three to five entries.",
    "The error, named.",
    "Number questions as",
    "At least four of the twelve must be",
    "Every one of the twelve gets a full solution",
    "Worked solution, every step shown",
    "the specific confusion to look for while they work",
    "one question that reveals whether it landed",
    "which earlier lesson to return to",
    "Objective one",
    "prereq skills, one line",
]


class Report:
    def __init__(self, lesson_id: str, path: Path):
        self.lesson_id = lesson_id
        self.path = path
        self.errors: list[str] = []
        self.warnings: list[str] = []

    def error(self, msg: str) -> None:
        self.errors.append(msg)

    def warn(self, msg: str) -> None:
        self.warnings.append(msg)

    @property
    def ok(self) -> bool:
        return not self.errors


def load_manifest() -> dict:
    return yaml.safe_load(MANIFEST.read_text(encoding="utf-8"))


def lesson_index(manifest: dict) -> dict:
    out = {}
    for level in manifest["levels"]:
        for lesson in level["lessons"]:
            entry = dict(lesson)
            entry["_level"] = level
            out[str(lesson["id"])] = entry
    return out


def slugify(title: str) -> str:
    s = title.lower()
    s = s.replace("&", "and")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def lesson_path(entry: dict) -> Path:
    slug = entry["_level"]["slug"]
    stem = str(entry["id"]).replace(".", "-") + "-" + slugify(entry["title"])
    return DOCS / slug / (stem + ".md")


def split_frontmatter(text: str):
    if not text.startswith("---"):
        return None, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return None, text
    try:
        return yaml.safe_load(parts[1]) or {}, parts[2]
    except yaml.YAMLError:
        return None, parts[2]


def strip_code(text: str) -> str:
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    return re.sub(r"`[^`\n]*`", "", text)


def section(body: str, heading: str) -> str:
    """Text from `heading` up to the next level-two heading."""
    start = body.find(heading)
    if start < 0:
        return ""
    rest = body[start + len(heading):]
    nxt = re.search(r"^## ", rest, flags=re.MULTILINE)
    return rest[: nxt.start()] if nxt else rest


def check_frontmatter(rep: Report, fm, entry: dict) -> None:
    if fm is None:
        rep.error("frontmatter missing or not parseable")
        return
    for key in FRONTMATTER_KEYS:
        if key not in fm:
            rep.error("frontmatter missing key `%s`" % key)
    if str(fm.get("lesson_id", "")) != str(entry["id"]):
        rep.error("lesson_id %r does not match manifest id %r" % (fm.get("lesson_id"), entry["id"]))
    if fm.get("status") not in {"planned", "drafted", "verified", "published"}:
        rep.error("status %r is not a legal value" % fm.get("status"))
    if fm.get("status") == "verified" and not str(fm.get("verified_by") or "").strip():
        rep.error("status is `verified` but verified_by is empty")
    if str(fm.get("title", "")).strip() != entry["title"].strip():
        rep.warn("title differs from manifest: %r" % fm.get("title"))


def check_sections(rep: Report, body: str) -> None:
    found = []
    for heading in REQUIRED_SECTIONS:
        idx = body.find(heading)
        if idx < 0:
            rep.error("missing section `%s`" % heading)
        else:
            found.append((idx, heading))
    ordered = [h for _, h in sorted(found)]
    expected = [h for h in REQUIRED_SECTIONS if h in ordered]
    if ordered != expected:
        rep.error("sections out of template order: %s" % ordered)


def check_examples(rep: Report, body: str) -> None:
    worked = section(body, "## Worked examples")
    headings = re.findall(r"^### Example\b.*$", worked, flags=re.MULTILINE)
    if len(headings) != 3:
        rep.error("expected 3 worked examples, found %d" % len(headings))
    thinking = len(re.findall(r"\*\*Thinking:?\*\*", worked))
    if thinking < len(headings):
        rep.error("%d worked example(s) missing a **Thinking** line" % (len(headings) - thinking))
    answers = len(re.findall(r"^\*\*Answer:?\*\*", worked, flags=re.MULTILINE))
    if answers < len(headings):
        rep.error("%d worked example(s) missing an **Answer** line" % (len(headings) - answers))


def numbered(text: str):
    # Solutions live inside a `??? success` block and are indented four spaces,
    # so leading whitespace has to be allowed here.
    return [int(n) for n in re.findall(r"^\s*\*\*(\d{1,2})\.\*\*", text, flags=re.MULTILINE)]


def check_practice(rep: Report, body: str) -> None:
    practice = section(body, "## Practice")
    if not practice:
        return
    nums = numbered(practice)
    if nums != list(range(1, 13)):
        rep.error("practice questions are %s, expected 1..12 in order" % (nums or "absent"))

    for chip in ("chip-easy", "chip-medium", "chip-hard"):
        if chip not in practice:
            rep.error("missing difficulty chip `%s`" % chip)

    # The real digital SAT is about one-quarter grid-in, which is 3 of 12.
    # Fewer is a defect; more misrepresents the test and costs the student
    # practice at eliminating distractors, so it warns rather than failing.
    spr = practice.count(SPR_MARK)
    if spr < 3:
        rep.error("only %d student-produced-response question(s), need 3 or 4" % spr)
    elif spr > 4:
        rep.warn(
            "%d student-produced-response questions; the real test is about "
            "one-quarter grid-in, so 3 or 4 of 12" % spr
        )

    if re.search(r"^\s*\d+\.\s", practice, flags=re.MULTILINE):
        rep.error("question numbered as a markdown ordered list; use `**1.**` or A-D options break")

    # Options are written either as `- A) ...` or as a plain indented `A) ...`.
    option_re = re.compile(r"^\s*-?\s*([A-D])\)", re.MULTILINE)
    blocks = re.split(r"^\*\*(\d{1,2})\.\*\*", practice, flags=re.MULTILINE)
    for i in range(1, len(blocks) - 1, 2):
        qnum, qtext = blocks[i], blocks[i + 1]
        if SPR_MARK in qtext:
            if option_re.search(qtext):
                rep.error("Q%s is marked student-produced but has answer choices" % qnum)
            continue
        opts = option_re.findall(qtext)
        if opts != ["A", "B", "C", "D"]:
            rep.error("Q%s options are %s, expected A) B) C) D)" % (qnum, opts or "absent"))


def check_answers(rep: Report, body: str) -> None:
    ans = section(body, "## Answers and solutions")
    if not ans:
        return
    rows = re.findall(r"^\s*\|\s*(\d{1,2})\s*\|\s*([^|]*?)\s*\|\s*$", ans, flags=re.MULTILINE)
    keyed = {}
    for n, v in rows:
        keyed[int(n)] = v
    missing = [n for n in range(1, 13) if n not in keyed]
    if missing:
        rep.error("answers table missing rows for %s" % missing)
    blank = sorted(n for n, v in keyed.items() if not v.strip())
    if blank:
        rep.error("answers table has empty answers for %s" % blank)

    sol_start = ans.find("Show full solutions")
    if sol_start < 0:
        rep.error("no `Show full solutions` block")
    else:
        sols = numbered(ans[sol_start:])
        missing_sol = [n for n in range(1, 13) if n not in sols]
        if missing_sol:
            rep.error("full solutions missing for %s" % missing_sol)


# Words that give away a currency sign masquerading as a maths delimiter.
CURRENCY_TELL = re.compile(
    r"\b(plus|per|each|costs?|paid|pays|bill|fee|total|apiece|charges?)\b",
    re.IGNORECASE,
)

LATEX_COMMAND = re.compile(r"\\[a-zA-Z]+\s*(\{[^{}]*\})?")
PROSE_WORD = re.compile(r"[A-Za-z]{3,}")


def maths_span_is_really_prose(span: str) -> bool:
    """True when a `$...$` span looks like prose two currency signs swallowed.

    Real maths spans are symbols, digits and LaTeX commands. Variable names are
    one or two characters. So once the LaTeX is stripped out, two or more
    ordinary English words is a reliable tell - as is a single word that only
    ever appears in a price sentence.
    """
    bare = LATEX_COMMAND.sub(" ", span)
    if CURRENCY_TELL.search(bare):
        return True
    return len(PROSE_WORD.findall(bare)) >= 2


def check_math_delimiters(rep: Report, text: str) -> None:
    clean = strip_code(text).replace("\\$", "")
    clean = re.sub(r"\$\$.*?\$\$", " ", clean, flags=re.DOTALL)

    if clean.count("$") % 2:
        rep.error("odd number of unescaped `$` - a maths delimiter is unclosed")

    for i, line in enumerate(clean.splitlines(), 1):
        if line.count("$") % 2:
            rep.error("line %d: odd number of unescaped `$` on one line" % i)
        for m in re.finditer(r"\$([^$\n]{1,120})\$", line):
            span = m.group(1)
            if maths_span_is_really_prose(span):
                rep.error(
                    "line %d: `$%s$` reads as maths but contains prose - "
                    "unescaped currency, write \\$ for dollar amounts" % (i, span[:48])
                )


def check_prose(rep: Report, text: str) -> None:
    clean = strip_code(text)
    for i, line in enumerate(clean.splitlines(), 1):
        bare = re.sub(r"^\s*(!!!|\?\?\?)\s*\w+", "", line)
        if "!" in bare.replace("!=", ""):
            rep.warn("line %d: exclamation mark" % i)
        if EMOJI.search(line):
            rep.error("line %d: emoji" % i)
        if BANNED_EXEMPT.search(line):
            continue
        for word in BANNED_WORDS:
            if re.search(r"\b%s\b" % re.escape(word), line, flags=re.IGNORECASE):
                rep.warn("line %d: banned word %r" % (i, word))
    for m in re.finditer(r"(?<![\d.\w])\.\d", clean):
        rep.warn("decimal without a leading zero near %r" % clean[m.start():m.start() + 8])


def word_count(text: str) -> int:
    clean = strip_code(text)
    clean = re.sub(r"\$\$.*?\$\$", " ", clean, flags=re.DOTALL)
    clean = re.sub(r"\$[^$\n]*\$", " ", clean)
    clean = re.sub(r"[#*>|`\-]", " ", clean)
    return len(clean.split())


def check_length(rep: Report, body: str) -> None:
    idea_words = word_count(section(body, "## The idea"))
    if idea_words > 400:
        rep.warn("`The idea` is %d words, template caps it at 400" % idea_words)

    practice_at = body.find("## Practice")
    tutor_at = body.find("## Tutor notes")
    teaching = body[:practice_at] if practice_at > 0 else body
    tutor = body[tutor_at:] if tutor_at > 0 else ""
    total = word_count(teaching) + word_count(tutor)
    if not 900 <= total <= 2000:
        rep.warn("teaching text is %d words, target is 1,200-1,800" % total)


def check_boilerplate(rep: Report, body: str) -> None:
    for phrase in TEMPLATE_BOILERPLATE:
        if phrase in body:
            rep.error("template boilerplate left in the lesson: %r" % phrase)


def normalise_for_compare(text: str) -> str:
    """Reduce a question to its bones so near-copies compare as near-equal.

    The numbers are the entire signal and must survive. Two questions built on
    the same template with different values are exactly what a good practice
    set looks like; it is the *same values* that means the student has already
    been shown the answer. An earlier version of this stripped `$...$` wholesale
    and so compared only the prose scaffolding, scoring 95% on questions whose
    numbers were completely different.
    """
    t = re.sub(r"\*\(student-produced response\)\*", " ", text)
    t = re.sub(r"^\s*-?\s*[A-D]\)\s.*$", " ", t, flags=re.MULTILINE)  # options
    t = t.replace("$", " ")                          # delimiters, not contents
    t = re.sub(r"\\[a-zA-Z]+", " ", t)               # latex command names
    t = re.sub(r"[^a-z0-9\s]", " ", t.lower())       # keeps digits
    return re.sub(r"\s+", " ", t).strip()


def numeric_signature(text: str) -> list:
    """Every number in a question, sorted. Two stems sharing one are twins."""
    body = re.sub(r"^\s*-?\s*[A-D]\)\s.*$", " ", text, flags=re.MULTILINE)
    return sorted(re.findall(r"\d+(?:\.\d+)?", body))


def canonical_maths(expr: str) -> str:
    """Put LaTeX and calculator syntax into one form so they can be compared.

    `g(x)=\\frac{3x+2}{x-5}` and the Desmos tip's `y=(3x+2)/(x-5)` are the same
    function written two ways; without this they share no substring worth
    noticing and a question rebuilt from a tip box goes unflagged.
    """
    e = expr
    e = re.sub(r"\\d?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}", r"(\1)/(\2)", e)
    e = re.sub(r"\\(left|right|qquad|quad|,|;|!|ne|neq|cdot|times)\b", " ", e)
    e = re.sub(r"\\[a-zA-Z]+", " ", e)
    e = e.replace("{", "").replace("}", "").replace("$", "")
    e = re.sub(r"\s+", "", e)
    return e.lower()


def longest_shared_run(a: str, b: str) -> str:
    """The longest substring two expressions have in common."""
    m = SequenceMatcher(None, a, b, autojunk=False).find_longest_match(0, len(a), 0, len(b))
    return a[m.a: m.a + m.size]


def concrete_expressions(text: str) -> set:
    """The specific maths in a question, whitespace-normalised.

    This is the reliable signal for a reused example, because a maths question
    is mostly maths: comparing the prose around it fails badly when the stem is
    a formula and three words. Example 3 of lesson 3.6 normalises to fourteen
    characters of prose, so a verbatim copy of it scored 0.32 on a word diff
    and slipped through.

    Only concrete instances count. A general form such as `f(x)=a(x-h)^2+k`
    legitimately appears in both the teaching and the questions, so an
    expression needs at least two digits to be considered a specific case.
    """
    body = re.sub(r"^\s*-?\s*[A-D]\)\s.*$", " ", text, flags=re.MULTILINE)

    # Three places maths hides, and all three have produced a missed duplicate:
    #   $$...$$  display blocks put the maths on its own line, so an inline
    #            pattern that cannot cross a newline never sees it
    #   $...$    ordinary inline maths
    #   `...`    code spans - the Desmos tips are written in calculator syntax
    #            rather than LaTeX, and a question was rebuilt from one
    without_display = re.sub(r"\$\$.+?\$\$", " ", body, flags=re.DOTALL)
    spans = re.findall(r"\$\$(.+?)\$\$", body, flags=re.DOTALL)
    spans += re.findall(r"(?<!\$)\$([^$\n]{4,})\$(?!\$)", without_display)
    spans += re.findall(r"`([^`\n]{6,})`", body)

    out = set()
    for span in spans:
        norm = canonical_maths(span)
        if len(norm) >= 8 and len(re.findall(r"\d", norm)) >= 2:
            out.add(norm)
    return out


def check_examples_not_reused(rep: Report, body: str) -> None:
    """A practice question must not be a worked example with the serial filed off.

    A model that writes the examples and the questions in one pass tends to
    reproduce the examples - the student has already been shown the answer, so
    the question tests recall. It is why this repo splits authoring from
    problem-writing across two agents, and it is the first thing to break when
    something writes both.
    """
    worked = section(body, "## Worked examples")
    idea = section(body, "## The idea")
    practice = section(body, "## Practice")
    if not worked or not practice:
        return

    raw_examples = re.findall(r"^>\s?(.+(?:\n>.*)*)", worked, flags=re.MULTILINE)
    examples = [
        (normalise_for_compare(m), numeric_signature(m), concrete_expressions(m))
        for m in raw_examples
    ]
    # The concept section often works a full computation through as an
    # illustration. A question rebuilt on those numbers is just as much a
    # giveaway as one copied from a worked example - lesson 3.8 had one.
    if idea:
        examples.append((normalise_for_compare(idea), [], concrete_expressions(idea)))
    if not examples:
        return

    blocks = re.split(r"^\s*\*\*(\d{1,2})\.\*\*", practice, flags=re.MULTILINE)
    for i in range(1, len(blocks) - 1, 2):
        qnum, raw = blocks[i], blocks[i + 1]
        stem = normalise_for_compare(raw)
        stem_nums = numeric_signature(raw)
        stem_exprs = concrete_expressions(raw)

        for n, (ex, ex_nums, ex_exprs) in enumerate(examples, 1):
            where = "Worked Example %d" % n if n <= len(raw_examples) else "`The idea`"

            # Not set equality. A display block often works a whole chain
            # through - `A = B = C` - while the question quotes only `A`, and
            # the same function turns up in LaTeX in one place and calculator
            # syntax in another. What identifies a copy is a long shared run.
            best = ""
            for se in stem_exprs:
                for ee in ex_exprs:
                    run = longest_shared_run(se, ee)
                    if len(run) > len(best) and len(re.findall(r"\d", run)) >= 2:
                        best = run
            if len(best) >= 12:
                rep.error(
                    "Q%s reuses %s - both contain `%s`; the answer is already "
                    "on the page" % (qnum, where, best[:46])
                )
                break

            # Fallback for questions carrying little inline maths: identical
            # number sets plus closely matching prose.
            if len(stem_nums) >= 3 and stem_nums == ex_nums and len(stem) >= 40:
                ratio = SequenceMatcher(None, stem[:400], ex[:400]).ratio()
                if ratio >= 0.60:
                    rep.error(
                        "Q%s reuses Worked Example %d - same numbers (%s), %.0f%% "
                        "identical wording; the answer is already on the page"
                        % (qnum, n, ", ".join(stem_nums[:6]), ratio * 100)
                    )
                    break


def check_admonition_indent(rep: Report, body: str) -> None:
    """Content inside `???`/`!!!` blocks must be indented four spaces.

    One to three spaces silently drops the line out of the collapsible block
    when MkDocs renders it - the answer row or solution paragraph simply is not
    where the student expects it, and nothing else here notices, because every
    other check allows arbitrary leading whitespace. Editing a question in
    place is how this gets introduced.
    """
    in_block = False
    for i, line in enumerate(body.splitlines(), 1):
        if re.match(r"^(\?\?\?|!!!)", line):
            in_block = True
            continue
        if not in_block or not line.strip():
            continue
        indent = len(line) - len(line.lstrip(" "))
        if indent == 0:
            in_block = False
        elif indent < 4:
            rep.error(
                "line %d: indented %d space(s) inside an admonition - needs 4, "
                "or it drops out of the block: %r" % (i, indent, line.strip()[:48])
            )


def check_nav(rep: Report, body: str) -> None:
    tail = body[body.find("## Tutor notes"):] if "## Tutor notes" in body else body
    links = re.findall(r"\[([^\]]+)\]\(([^)\s]+\.md)\)", tail)
    if not links:
        rep.error("no prev/next navigation links")
        return
    for label, target in links:
        target = target.split("#")[0].rstrip("/")
        resolved = (rep.path.parent / target).resolve()
        if resolved.suffix != ".md":
            resolved = resolved.with_suffix(".md")
        if not resolved.exists():
            rep.error("navigation link %r points at a missing file: %s" % (label, target))


def lint(lesson_id: str, entry: dict) -> Report:
    path = lesson_path(entry)
    rep = Report(lesson_id, path)
    if not path.exists():
        rep.error("file does not exist: %s" % path.relative_to(ROOT))
        return rep

    text = path.read_text(encoding="utf-8")
    fm, body = split_frontmatter(text)

    check_frontmatter(rep, fm, entry)
    check_sections(rep, body)
    check_examples(rep, body)
    check_practice(rep, body)
    check_answers(rep, body)
    check_math_delimiters(rep, body)
    check_prose(rep, body)
    check_length(rep, body)
    check_boilerplate(rep, body)
    check_examples_not_reused(rep, body)
    check_admonition_indent(rep, body)
    check_nav(rep, body)
    return rep


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("lessons", nargs="*", help="lesson ids, e.g. 1.3 1.4")
    ap.add_argument("--level", type=str, help="lint every lesson in a level")
    ap.add_argument("--strict", action="store_true", help="warnings fail too")
    ap.add_argument("--quiet", action="store_true", help="only show lessons with findings")
    ap.add_argument(
        "--require-verified",
        action="store_true",
        help="fail unless the lesson's frontmatter actually records a verification",
    )
    args = ap.parse_args()

    index = lesson_index(load_manifest())

    if args.lessons:
        for lid in args.lessons:
            if lid not in index:
                print("unknown lesson id: %s" % lid, file=sys.stderr)
        targets = [(lid, index[lid]) for lid in args.lessons if lid in index]
    elif args.level is not None:
        targets = [(lid, e) for lid, e in index.items() if str(e["_level"]["id"]) == str(args.level)]
    else:
        targets = []
        for lid, entry in index.items():
            path = lesson_path(entry)
            if path.exists():
                fm, _ = split_frontmatter(path.read_text(encoding="utf-8"))
                if (fm or {}).get("status") in {"drafted", "verified", "published"}:
                    targets.append((lid, entry))

    if not targets:
        print("nothing to lint")
        return 0

    failed = warned = 0
    for lid, entry in targets:
        rep = lint(lid, entry)
        # A verifier agent that reports `verified` but never edits the file leaves
        # no record that any check happened. Run this after a verification stage
        # and the claim has to match the file, or the build stops.
        if args.require_verified and rep.path.exists():
            fm, _ = split_frontmatter(rep.path.read_text(encoding="utf-8"))
            fm = fm or {}
            if fm.get("status") != "verified":
                rep.error(
                    "expected a recorded verification, but status is %r - if an "
                    "agent reported `verified`, its verdict does not match the file"
                    % fm.get("status")
                )
            elif not str(fm.get("verified_by") or "").strip():
                rep.error("status is `verified` but verified_by records no one and no date")
        if rep.errors:
            failed += 1
        if rep.warnings:
            warned += 1
        if args.quiet and rep.ok and not rep.warnings:
            continue
        mark = "FAIL" if rep.errors else ("warn" if rep.warnings else "ok")
        print("\n[%s] %s  %s" % (mark, lid, rep.path.relative_to(ROOT).as_posix()))
        for msg in rep.errors:
            print("   error: %s" % msg)
        for msg in rep.warnings:
            print("   warn:  %s" % msg)

    print("\n%d linted - %d with errors, %d with warnings" % (len(targets), failed, warned))
    return 1 if failed or (args.strict and warned) else 0


if __name__ == "__main__":
    raise SystemExit(main())
