---
description: Sync nav, build the site locally, and push to GitHub Pages
allowed-tools: Bash, Read, Edit
---

Publish the current state of the course.

1. `python scripts/sync_nav.py` — pick up any manifest changes
2. `mkdocs build --strict` — fail on broken links or bad references
3. If the build fails, fix the errors and retry once. Report and stop if it
   fails again.
4. `git add -A && git commit` with a message naming which lessons changed
5. `git push`

GitHub Actions deploys the site from `main`. Tell me the commit message and
the live URL. Do not summarise the content that changed.
