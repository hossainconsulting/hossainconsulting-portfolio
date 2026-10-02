# Automated blog drafts from completed projects

Date/time and timezone: 2026-10-01, Australia/Sydney.

Requirement or issue: Hemayet asked for automation that creates blog posts on both sites when
project work is completed and pushed. His choices: draft PR for review (no auto-publish), a daily
scheduled check, a `blog/<name>` git tag as the completion signal, and two posts per completion
(personal + agency).

Environment/target: Branch `claude/website-access-065fb2` (PR #1), cloud container, Node.js 22.22.0.

Starting state: Blog routes and `src/lib/blog.ts` from commit b528996; no automation.

Changes made:

- `automation/blog-projects.json`: watched public project repos and the `blog/` tag prefix.
- `scripts/blog-candidates.mjs`: lists `blog/*` tags in watched repos that have no post yet
  (dedupe via each post's `source: { repo, tag }`). Read-only; uses `git ls-remote`.
- `automation/blog-from-projects.md`: the runbook the routine follows, including content rules
  (only claims the source repo supports, projects named as simulations, no personal data).
- `src/lib/blog.ts`: optional `source` field on `Post`. README: how to trigger a draft.
- Claude Code routine `Blog posts from completed projects` (trig_01SZ8dyyuYgfpsgTVnZ3XDLd):
  daily 06:55 Australia/Sydney, fresh session per run, follows the runbook on `main`,
  opens draft PRs only.

Validation procedure/command and observed result:

- `node scripts/blog-candidates.mjs` against GitHub: exit 0, `{"candidates":[],"errors":[]}`
  (no `blog/*` tags exist yet in any watched repo).
- Local test with `BLOG_GIT_BASE=file://...` and two throwaway bare repos (no tags pushed to
  GitHub): tags `blog/phase-1` and `blog/sprint-1` were listed; a non-blog tag `v1.0` was ignored.
  After adding a temporary post with `source: { repo: "tradelink-group", tag: "blog/sprint-1" }`,
  only `blog/phase-1` remained. The temporary post was removed. The 13 errors in that test were
  the watched repos that did not exist locally, which is expected.
- `npm run lint` exit 0; `npm run build` exit 0; `git diff --check` exit 0.

Limitations / checks not run:

- The routine has not run yet; first scheduled run is 2026-10-02 06:55 Sydney time. It needs
  PR #1 merged to `main`; until then it stops and reports that.
- The routine was created without connectors (the creating session had none to pass). A run
  may lack the GitHub PR tool; the runbook then pushes the branch and reports a compare link.
- Post quality depends on each repo's evidence at the tag; every draft needs human review.

Related issue/PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/1
