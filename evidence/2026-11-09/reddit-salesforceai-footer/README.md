# Personal footer Reddit link → u/SalesforceAI

Date/time and timezone: 2026-11-09, Australia/Sydney (UTC+11:00).

Requirement or issue: Hemayet asked to replace the Reddit link in the recruitment
(personal) website footer with his personal Reddit account
https://www.reddit.com/user/SalesforceAI/, which he connected to the
"Hemayet Hossain | Personal" Heropost workspace the same day.

Environment/target: hossainconsulting/hossainconsulting-portfolio, personal site
hemayethossain.com (footer list `PERSONAL_SOCIAL` in `src/lib/site.ts`).
Baseline: origin/main 1bc312e3eae88fca5a981c77d3d74fa60e88076a, clean tree.
Branch: claude/reddit-salesforceai-2026-11-09.

Starting state: live hemayethossain.com footer linked Reddit to
https://www.reddit.com/user/hemayetAI/ (checked in the browser before editing).

Changes made: one line in `src/lib/site.ts` — personal Reddit href changed from
`https://www.reddit.com/user/hemayetAI/` to `https://www.reddit.com/user/SalesforceAI/`.
The agency footer (`AGENCY_SOCIAL`, u/hossainconsulting) and the X link
(x.com/hemayetAI) are unchanged. The 2026-10-09 reddit-footer evidence is
preserved as history.

## Validation

- `git diff --check`: exit 0.
- `grep -rn "hemayetAI/" src | grep -i reddit`: no matches (exit 1), so no old Reddit link remains in source.
- `npm ci --cache /tmp/npm-cache --no-audit --no-fund`: exit 0.
- `npx tsc --noEmit --incremental false`: exit 0.
- `npm run build`: exit 0.
- `npx eslint src`: exit 0.
- `npm run lint` (whole repo): exit 1, **pre-existing**. 4 `no-require-imports` errors in
  `evidence/2026-10-09/reddit-footer/verify.cjs`; the same failure occurs on the
  unmodified baseline (stash check). Not changed by this task.
- `next start -p 3109`, then `curl -H "Host: hemayethossain.com" /` → footer contains
  `reddit.com/user/SalesforceAI/` (2 occurrences) and no other Reddit user link;
  `curl -H "Host: hossainconsulting.com" /` → only `reddit.com/user/hossainconsulting/`.

## Limitations / checks not run

- No screenshots or mobile-viewport check; this is a single URL string change in an existing list.
- Public accessibility of the u/SalesforceAI profile was not independently checked (browser
  tools could not read reddit.com in this session); the handle was supplied by Hemayet.
- No merge or deployment performed by this task; production updates when the PR is merged
  (Vercel auto-deploys main).

Related issue/PR: see the PR opened from this branch.
