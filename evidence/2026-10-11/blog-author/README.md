# Hemayet blog author draft for both sites

Date: 11 October 2026 (UTC). Target: hemayethossain.com and hossainconsulting.com,
shared application hossainconsulting/hossainconsulting-portfolio.

## Starting state and coordination

- Historical checkout `2026-10-02/t/work/hossainconsulting-portfolio` was clean on
  codex/social-profile-calendly. It was read only; its branch and files were preserved.
- Created a separate local clone in task-4/author-draft, branch
  `codex/blog-author-hemayet`. Fetched current origin/main and fast-forwarded the
  clean branch to `831924a843e4cf4a776d428d96cd020fba0cac9b` before editing.
- Last five commits: 831924a, 58f2be9, eafec2a, 2576b23, 0e36186.
- Read AGENTS.md, EVIDENCE.md, .cursorrules, CLAUDE.md, execution board, blog
  automation runbook, current blog implementation and dated coordination evidence.
  No repository .agents, file ownership handover or GitHub Actions workflows exist
  on this main snapshot. Read bundled Next 16.3.4 JSON-LD, metadata and navigation guides.
- GitHub connected read checked open PRs: only draft PR #16, evidence-only social
  distribution review on docs/social-distribution-review-20261010. No open Claude
  PR overlaps this work. Scheduled hours were not used as completion evidence.
- Current main already credits Hemayet in all article bylines and BlogPosting
  author data. No existing post was reassigned and no article text was changed.

## Draft changes

- `src/lib/blog-author.ts`: one shared identity, requested founder/subject byline,
  truthful personal and agency biographies, existing public personal About,
  LinkedIn and Trailblazer URLs. Text only; no avatar or unsupported credentials,
  client delivery, paid work or outcomes added.
- `src/app/blog/[series]/[post]/page.tsx`: reusable visible byline and author bio,
  rel=author links, consistent metadata and Person description/profile links.
  Existing schema convention, publisher, routing, posts and illustration disclosure
  retained. No new CMS, author account or author route.
- README: integration location and future contributor attribution guidance.

## Actual validation

- `npm ci --offline --ignore-scripts`: failed ENOTCACHED for zod-validation-error.
  Copied the existing same-version local node_modules into this isolated clone
  using robocopy; no dependency manifests changed and no symlink used.
- `npm run build`: passed, exit 0, Next 16.3.4 compilation and TypeScript included.
- `npm run lint`: failed with four existing no-require-imports errors in
  evidence/2026-10-09/reddit-footer/verify.cjs. That file is unchanged.
- Scoped ESLint on both changed source files and check-render.mjs: passed, exit 0.
- `node scripts/check-blog-search.mjs`: passed, exit 0. Existing framework-stubbed
  checks cover article metadata, canonical origins, sitemap and cross-site rejection.
- `node evidence/2026-10-11/blog-author/check-render.mjs`: passed, exit 0 against
  local production Next server on port 3114. Explicit Host requests checked both
  introductory articles, correct audience bios, one H1, author heading/link,
  parsed schema identity, current personal About 200 and wrong-site notFound.
  Results are in render-results.json. Node's fetch did not preserve the requested
  Host in this environment; the final verifier uses node:http. Next streamed
  notFound responses can have status 200, so rejection checks inspect the body.
- `git diff --check`: passed. Article content, src/lib/blog.ts, site URLs and
  disclosures were preserved; no authoring of additional posts was claimed.
- Local Chromium screenshot attempt failed: GPU subprocess exit -1073741515,
  ending with GPU unusable. No screenshot produced. Visual/mobile browser QA
  remains incomplete; semantic HTTP rendering checks are not visual verification.

## Publication boundary and remaining review

This is a local review draft. No live site, account, token, keyring or service was
modified. No push, PR, merge or deployment performed. Git transport required a
read-only escalated fetch with a command-scoped safe.directory exception; no
credential repair or permanent Git configuration change was made.

README confirms Vercel deploys main. The execution board also records a successful
Vercel PR check, indicating branch previews. No push until the owner explicitly
authorises a Vercel preview deployment or confirms this branch cannot deploy.
That permission is separate from production publication. Visual QA and public
profile reachability were not verified here; source links reuse the approved
existing identities. The separate portfolio evidence hub is untouched.
