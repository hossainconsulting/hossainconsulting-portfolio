# Personal site uses its own email address
Date/time and timezone: 2026-10-15, Australia/Sydney.
Requirement: Hemayet decided the agency site uses `hemayet@hossainconsulting.com` and the personal site uses `hemayet@hemayethossain.com` (both aliases forwarding to the same inbox). Both sites previously used the agency address through one shared constant.
Environment/target: branch `claude/inbound-funnels-email-sequences-7en5ft` (PR #20), local production build, Node.js v22.22.0. Not deployed.

## Changed
- `src/lib/site.ts`: the single `EMAIL` constant replaced by `EMAIL_AGENCY` and `EMAIL_PERSONAL`; `getSite()` now also returns `email` for the current host.
- Footer email link (`layout.tsx`), legal and privacy contact lines (`legal/page.tsx`, `privacy/page.tsx`) use the current host's address.
- Contact band (`components/Sections.tsx`) chooses by host; the services page uses the agency address; the résumé page's résumé-request link uses the personal address; the agency structured-data email uses `EMAIL_AGENCY`.
- Privacy page: the sentence about mail routing now names both addresses.

## Validation actually run
- `npx eslint src`: exit 0. `npx tsc --noEmit`: exit 0. `npm run build`: exit 0.
- `next start`, requests for `/`, `/services`, `/resume`, `/privacy`, `/legal` and `/blog` with each Host header, counting address occurrences in the HTML:
  - `hossainconsulting.com`: `/`, `/services`, `/legal`, `/blog` contain only the agency address.
  - `hemayethossain.com`: `/`, `/resume`, `/legal`, `/blog` contain only the personal address; `/services` returns 404 as before and its 404 footer shows the personal address.
  - `/privacy` on both hosts names both addresses in the mail-routing sentence, as intended, and uses the host's own address for privacy requests.
  - `/resume` is reachable on the agency host; it shows the agency address in the footer and the personal address in the résumé-request link (the résumé belongs to Hemayet).

## Not verified / limitations
- Not deployed (Vercel deploys `main`). Server-rendered text only.
- No test mail was sent: it is not verified that `hemayet@hemayethossain.com` exists or forwards to the inbox. An earlier note in this repo says inbound mail for the personal domain was not configured by this implementation; Hemayet should send a test message before the change is live.
- The privacy page's statement that mail is "routed through Google's mail service" is unverified for the personal domain.
- `src/utils/constants.ts` still holds an unused `CONTACT.email` with the agency address; it is not referenced by any page and was not changed.

## Update (2026-10-15, after merge of PR #20)
Hemayet reported that both addresses, `hemayet@hossainconsulting.com` and `hemayet@hemayethossain.com`, were tested and work. This is a user-reported result; Claude did not send or receive any test mail and has not verified it independently. It closes the "test mail" limitation above for both addresses. Not covered by this report: sending from the aliases (Gmail "Send mail as"), SPF/DKIM/DMARC for outgoing mail, and the privacy page's statement that mail is routed through Google's mail service for the personal domain.
