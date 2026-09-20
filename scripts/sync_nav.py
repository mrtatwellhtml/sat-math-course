#!/usr/bin/env python3
"""Regenerate the mkdocs nav and stub any missing lesson pages.

Run after editing curriculum/manifest.yml:
    python scripts/sync_nav.py

This is deterministic bookkeeping. Never ask an agent to do it.
"""
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "curriculum" / "manifest.yml"
DOCS = ROOT / "docs"
MKDOCS = ROOT / "mkdocs.yml"


def slugify(title: str) -> str:
    s = title.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def page_path(level: dict, lesson: dict) -> Path:
    return Path(level["slug"]) / f"{lesson['id'].replace('.', '-')}-{slugify(lesson['title'])}.md"


def main() -> int:
    data = yaml.safe_load(MANIFEST.read_text(encoding="utf-8"))
    nav_lines = [
        "nav:",
        "  - Start here: index.md",
        "  - Placement:",
        "      - Overview: placement/index.md",
        "      - Level 0 Placement Check: placement/level-0-check.md",
        "      - Full Diagnostic: placement/full-diagnostic.md",
        "  - Printable worksheets: worksheets/index.md",
    ]
    stubbed = 0

    for level in data["levels"]:
        nav_lines.append(f'  - "{level["title"]}":')
        # level index page
        idx = Path(level["slug"]) / "index.md"
        if not (DOCS / idx).exists():
            (DOCS / idx).parent.mkdir(parents=True, exist_ok=True)
            (DOCS / idx).write_text(
                f"# {level['title']}\n\n{level.get('rationale', '').strip()}\n\n"
                + "\n".join(
                    f"- [{ls['id']} {ls['title']}]({page_path(level, ls).name})"
                    for ls in level["lessons"]
                )
                + "\n",
                encoding="utf-8",
            )
            stubbed += 1
        nav_lines.append(f"      - Overview: {idx.as_posix()}")

        for lesson in level["lessons"]:
            rel = page_path(level, lesson)
            full = DOCS / rel
            if not full.exists():
                full.parent.mkdir(parents=True, exist_ok=True)
                full.write_text(
                    f"---\nlesson_id: \"{lesson['id']}\"\n"
                    f"title: \"{lesson['title']}\"\n"
                    f"level: {level['id']}\nstatus: planned\n---\n\n"
                    f"# {lesson['id']} {lesson['title']}\n\n"
                    "!!! info \"Not written yet\"\n"
                    "    This lesson is planned but not yet drafted.\n"
                    f"    Generate it with `/build-lesson {lesson['id']}`.\n",
                    encoding="utf-8",
                )
                stubbed += 1
            nav_lines.append(f'      - "{lesson["id"]} {lesson["title"]}": {rel.as_posix()}')

    text = MKDOCS.read_text(encoding="utf-8")
    # Anchor to a line start. Splitting on the bare string "nav:" also
    # matches keys that merely contain it, such as not_in_nav:, and
    # truncates the config mid-key - a YAML error far from its cause.
    head = re.split(r"^nav:", text, maxsplit=1, flags=re.M)[0].rstrip() + "\n\n"
    MKDOCS.write_text(head + "\n".join(nav_lines) + "\n", encoding="utf-8")

    total = sum(len(l["lessons"]) for l in data["levels"])
    print(f"nav synced: {total} lessons across {len(data['levels'])} levels")
    print(f"stub pages created: {stubbed}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
