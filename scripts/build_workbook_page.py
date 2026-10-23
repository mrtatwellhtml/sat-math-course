"""Rebuild workbook/public/index.html from workbook/src/app.fragment.html.

The fragment is the source of truth: it is also what gets published as a
Claude artifact, where the host page supplies the doctype, charset and
viewport. This script wraps it into the standalone page that Firebase serves.

Run it after editing the fragment:

    python scripts/build_workbook_page.py

Never hand-edit workbook/public/index.html - it is generated, and an edit
there is lost the next time this runs.
"""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRAG = ROOT / "workbook" / "src" / "app.fragment.html"
OUT = ROOT / "workbook" / "public" / "index.html"

PRELUDE = (
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1, '
    'viewport-fit=cover">\n'
)


def main() -> None:
    frag = FRAG.read_text(encoding="utf-8")
    marker = "<header>"
    i = frag.index(marker)
    head, body = frag[:i].rstrip(), frag[i:].rstrip()
    OUT.write_text(
        "<!doctype html>\n<html lang=\"en\">\n<head>\n"
        + PRELUDE + head + "\n</head>\n<body>\n" + body + "\n</body>\n</html>\n",
        encoding="utf-8", newline="\n",
    )
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
