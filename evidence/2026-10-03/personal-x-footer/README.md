# Personal X footer account

Date: 2026-10-03, Australia/Sydney.

Target: Personal website footer. User supplied an X profile screenshot identifying Hemayet Hossain as @hemayetAI and requested the new account in the footer.

Changed only PERSONAL_SOCIAL's X href in src/lib/site.ts from https://x.com/himu_sydney to https://x.com/hemayetAI. Business X remains https://x.com/HossainConsult. The footer in src/app/layout.tsx selects PERSONAL_SOCIAL for the personal site and renders its href directly.

Validation: Reviewed repository AGENTS.md/EVIDENCE.md and installed lockfile dependencies with npm ci --ignore-scripts --no-audit --no-fund (exit 0). Read the shipped Next.js linking/navigation guide before editing. npm run lint passed (exit 0); git diff --check passed; reviewed the one-line source diff and footer consumer. No new tests were needed for a literal URL change. No production build or live deployment verification performed; destination account ownership is based on the user's screenshot, not independent account access.

Screenshot was not copied into GitHub because it includes unrelated feed content. No secrets or private contact information included. Change pushed through existing PR 5; deployment/merge not performed.

Related PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/5
