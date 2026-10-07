# Personal footer X link correction
Date: 2026-10-07 (UTC)
Target: hossainconsulting/hossainconsulting-portfolio; https://hemayethossain.com/
Base: main at 9fb57f8725d0d5b77f5f7b7bf7ebcb99ad289cd0.

## Change
Only src/lib/site.ts PERSONAL_SOCIAL X href changes from https://x.com/himu_sydney to https://x.com/hemayetAI. AGENCY_SOCIAL retains https://x.com/HossainConsult. Reviewed src/app/layout.tsx: it chooses the personal list for the personal host and maps each href into the footer anchor.

## Verification
- Read AGENTS.md, EVIDENCE.md, package.json and the installed Next.js 16.3.4 link component guide before editing.
- Located existing checkout at Documents/Codex/2026-10-02/t/work/hossainconsulting-portfolio. Status clean on codex/social-profile-calendly; origin is the intended GitHub repository. Recent local commits ff11850, 8e1b5b4, af81213. Existing open PR #5 includes unrelated profile evidence and an older correction; left untouched.
- Rechecked remote main and its successful Vercel deployment status. Created a separate branch from the exact remote main.
- Fetched exact base site.ts through the GitHub connector, replaced the single literal URL and reviewed the one-line diff.
- Ran node "<existing-checkout>/node_modules/eslint/bin/eslint.js" --config "<existing-checkout>/eslint.config.mjs" verification/site.ts: exit 0. Isolated file lint warned about missing React/package and pages in this verification workspace; no lint errors.
- git diff --no-index --check verification/site.before.ts verification/site.ts: exit 1 indicating differing files; no whitespace errors printed (only LF/CRLF conversion notices). Source diff contains exactly one removed and one added URL line.
- Local full build not run: the available checkout is an older branch, and network Git clone failed with local TLS credential/trust errors. GitHub CLI authentication is invalid. The authorized GitHub connector is used for publication; required deployment build will be verified through the PR Vercel status.
- Initial web read of the public homepage exposed footer X href https://x.com/himu_sydney. Web result was crawled two days earlier, so final verification requires a fresh request after deployment.

## Limitations at commit time
PR review, preview build, merge, production deployment and fresh live footer verification are pending. No Vercel API workaround, settings, security or secret changes performed.
