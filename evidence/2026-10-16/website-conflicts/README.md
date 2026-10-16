# Prepare cross-site consistency fixes

Date: 16 October 2026, Australia/Sydney.
Target: hemayethossain.com and hossainconsulting.com, this repository's shared Next.js app.
Starting main: 19bbf35. Branch: codex/website-conflicts-20261016.

Hemayet requested fixes prepared for review and confirmed Claude was idle. Claude's public portfolio PR #31 handover releases both website repositories for the remaining copy corrections. Existing checkouts were preserved; work used an isolated clone. No merge, production deployment, account change or email was performed.

## Changes

- SunRise cards and the career-direction article now link to the portfolio's `/#sunrise` status and evidence-request section instead of an inaccessible private repository. Cards clearly disclose that project evidence is private and available for a walkthrough on request. The public SOP and AI repository links remain.
- Removed the private résumé repository link. The existing email request action remains, with a clear explanation that the application résumé is available by email.
- Replaced the agency privacy page's assertion that portfolio notices are already published with a future collection-page/provider/notice confirmation gate. This avoids referring visitors to currently missing live URLs; it does not open sign-ups or change collection settings.
- Replaced the article's free one-page summary promise with the introductory-call scope. Pricing, simulations, credentials, legal-review gate and personal/agency identities are preserved.

## Actual validation

- Locked dependencies installed with `npm ci --ignore-scripts --no-audit --no-fund`. First attempt failed certificate-chain verification. Retried with `NODE_OPTIONS=--use-system-ca`, using Windows' trust store; passed. TLS verification was not disabled. Lockfile unchanged.
- `npm run build`: passed, including TypeScript and page generation.
- `npx eslint src`: passed, exit 0.
- `npm run lint`: failed on four existing `@typescript-eslint/no-require-imports` errors in the unchanged `evidence/2026-10-09/reddit-footer/verify.cjs`. Those historical files were not edited. The build was run after this failure and passed independently.
- Started the production build locally on port 3107. Ten HTTP checks with explicit personal/agency Host headers passed (200): personal root/projects/résumé/privacy/career article, agency root/services/privacy/legal/free-call article. Parsed anchors contain no direct private SunRise or résumé repository links on those checked pages. Verified the résumé request address, removal of broken portfolio-notice references, absence of the free-summary promise, unchanged four prices and legal-review warning. Results: `local-domain-checks.json`.
- React review: components remain server-rendered; no new hooks, client state, network waterfalls or dependencies. Project key is unchanged and links retain visible labels.
- `git diff --check`: passed. Diff and evidence reviewed for credentials, private notes, customer data and unrelated changes before staging.

## Review/release boundaries

The companion `hossainconsulting/portfolio` branch of the same name supplies the new SunRise anchor, candidate/contact wording and portfolio notices. Review and release together: the new cross-site SunRise fragment is not present in the older live portfolio. Existing portfolio notice files resolve locally; production remains unverified until an approved release.

This is prepared source, not a claim that the live conflicts are fixed. Public access to private repositories was not widened. Mail delivery, bookings, legal approval, payment setup and production checks were not performed. Full-repository lint remains blocked by the historical evidence script described above.
