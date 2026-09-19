#!/usr/bin/env python3
"""Show what is written, what is verified, and what is left.

    python scripts/status.py
    python scripts/status.py --next      # print the next lesson to build
"""
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

BAR = {"planned": ".", "drafted": "d", "verified": "V", "published": "P"}


def read_status(p: Path) -> str:
    if not p.exists():
        return "planned"
    m = re.search(r"^status:\s*\"?(\w+)\"?", p.read_text(encoding="utf-8"), re.M)
    return m.group(1) if m else "planned"


def slugify(t):
    return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")


def main():
    data = yaml.safe_load((ROOT / "curriculum" / "manifest.yml").read_text(encoding="utf-8"))
    counts = {k: 0 for k in BAR}
    nxt = None
    rows = []
    for level in data["levels"]:
        for ls in level["lessons"]:
            p = DOCS / level["slug"] / f"{ls['id'].replace('.', '-')}-{slugify(ls['title'])}.md"
            st = read_status(p)
            counts[st] = counts.get(st, 0) + 1
            rows.append((level["id"], ls["id"], st, ls["title"]))
            if nxt is None and st in ("planned", "drafted"):
                nxt = (ls["id"], st, ls["title"])

    if "--next" in sys.argv:
        if nxt:
            print(f"{nxt[0]}  ({nxt[1]})  {nxt[2]}")
        else:
            print("All lessons verified.")
        return

    cur = None
    for lvl, lid, st, title in rows:
        if lvl != cur:
            cur = lvl
            print(f"\nLevel {lvl}")
        print(f"  [{BAR.get(st, '?')}] {lid:>4}  {st:<10} {title}")

    total = sum(counts.values())
    done = counts.get("verified", 0) + counts.get("published", 0)
    print(f"\n{'-'*54}")
    print(f"  {done}/{total} verified   "
          f"({counts.get('drafted',0)} drafted, {counts.get('planned',0)} not started)")
    if nxt:
        print(f"  next: /build-lesson {nxt[0]}")


if __name__ == "__main__":
    main()
