"""Publish the online workbook alongside the course, at /workbook/.

workbook/public is a self-contained single page that fetches data/bank.json
relative to itself, so it is copied into the built site unchanged. This is a
MkDocs hook (see `hooks:` in mkdocs.yml).
"""

from __future__ import annotations

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "workbook" / "public"


def on_post_build(config, **kwargs):
    shutil.copytree(SRC, Path(config["site_dir"]) / "workbook", dirs_exist_ok=True)
