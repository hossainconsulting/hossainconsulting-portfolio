# Agency privacy notice: planned checklist email list and payments
Date/time and timezone: 2026-10-15, Australia/Sydney.
Requirement: the agency privacy notice did not cover the free checklist email list (consent, retention, email platform) or payment arrangements planned in `hossainconsulting/portfolio` PR #28 (merged). The notice itself says new forms and payment collection need a review of the notice before introduction. Hemayet asked for the agency privacy page to be updated.
Environment/target: branch `claude/inbound-funnels-email-sequences-7en5ft` restarted from `main` (f0e411c) after PR #19 merged; local production build, Node.js v22.22.0. Not deployed.

## Changed (`src/app/privacy/page.tsx`)
- Date changed to "Updated 15 October 2026".
- Two agency-only sections added before "Overseas processing" (rendered only when `site.agency` is true):
  - "Free checklist and email updates": the checklist is being prepared and will be offered within the evidence portfolio at portfolio.hossainconsulting.com, which will publish its own privacy policy and terms before sign-ups open; until then no sign-ups are collected. When available: a consent tick box; data kept (name, email, business name, trade, time and wording agreed, page used); used only to send the checklist and agreed emails and to reply; not sold; unsubscribe link in every email; kept while subscribed and up to 24 months after last interaction, plus an unsubscribe record; an email platform that may process data in the United States or other countries, to be named before sign-ups open.
  - "Payments for our own fees": payment processing is not available yet; when it is, Hossain Consulting's own fees are paid through a payment provider to be named first; card details are not asked for or stored; clients subscribe to their own tools (CRM, advertising account, domain, hosting) in their own name with their own card and pay those providers directly.
- The personal-site version of the page is unchanged apart from the date.

## Validation actually run
- `npx eslint src/app/privacy/page.tsx`: exit 0.
- `npm run build`: exit 0.
- `next start`, `GET /privacy` with `Host: hossainconsulting.com`: contains the date, both new headings, the card-details sentence, "unsubscribe link" and "24 months". With `Host: hemayethossain.com`: contains the date only; none of the new sections (rendered text lengths 5,869 vs 4,331 characters).

## Not verified / limitations
- Server-rendered text only; no browser screenshots. Not deployed, so the live privacy page is unchanged until merge and deploy (Vercel deploys `main`).
- Wording not legally reviewed. The email platform and payment provider are not chosen; the notice commits to naming them before sign-ups or payments open. The portfolio-site privacy policy and terms are merged in the portfolio repo but not deployed, so they must be deployed before checklist sign-ups open.
- The portfolio-site privacy policy still says it covers a chat widget and a different set of providers; the two notices should be kept aligned.
- Related: `hossainconsulting/portfolio` PR #28; `hossainconsulting-portfolio` PR #19.
