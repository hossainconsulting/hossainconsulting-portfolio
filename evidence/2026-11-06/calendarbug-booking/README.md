# Replace Calendly booking links with CalendarBug

Date/time and timezone: 6 November 2026, UTC
Requirement or issue: Point hemayethossain.com booking URLs to https://www.calendarbug.com/book/hemayet-hossain/salesforce-intro-call and hossainconsulting.com booking URLs to https://www.calendarbug.com/book/hemayet-hossain/free-introductory-call. Remove Calendly from public booking links and from privacy wording that says introductory bookings use Calendly.
Environment/target: This website repository, local production build (`next build` / `next start` on 127.0.0.1:3456). Host identity was selected with the Host header and, in Chrome, with `--host-resolver-rules` mapping both public domains to 127.0.0.1. Not deployed.
Starting state: `src/lib/site.ts` used one shared URL, https://calendly.com/hemayet_hossain/20-minute-intro-call, for `BOOK_CALL`, `BOOK_CLIENT_CALL` and `BOOK_RECRUITER_CALL`. The services catalogue HTML contained that same href. `/privacy` named Calendly and linked to https://calendly.com/legal/privacy-notice, including a United States / other-country storage statement taken from Calendly’s notice.

Changes made:
- Booking URLs are chosen from the existing host check in `getSite()`. Agency hosts (`hossainconsulting.com` and `www.hossainconsulting.com`) receive the free introductory call. Every other host, including hemayethossain.com, receives the Salesforce intro call.
- Homepage, contact band, résumé and blog contact links use `getSite().bookCall`.
- The services catalogue keeps its reviewed HTML and replaces `__BOOKING_URL__` with that host URL. `/services` is still agency-only.
- `/privacy` now says introductory bookings use CalendarBug, an external scheduling service. It still says to review the information requested on the booking page before submitting, and that a free introductory call is separate from a paid service booking. The notice date is 6 November 2026.
- The Calendly privacy-notice links now point to https://www.calendarbug.com/privacy. That path is CalendarBug’s own footer “Privacy Policy” route. Chrome rendered “Calendar Bug powered by Monarch Labs, LLC Privacy Policy”. The previous sentence that Calendly stores information in the United States or other countries was removed. CalendarBug’s rendered notice was not used to invent a storage-country claim. The agency page’s existing general statement that some service providers may store data outside Australia, for example in the United States, was left as it was.
- Footers were not edited. Historical evidence, brand-growth notes and the 2 October 2026 skill scope still mention Calendly as the provider in use at those dates.

Validation procedure/command:
- `npx eslint` on the seven changed TypeScript files. Exit 0.
- `npm run lint` (full repository). Exit 1. Four existing `@typescript-eslint/no-require-imports` errors in `evidence/2026-10-09/reddit-footer/verify.cjs`. That file was not part of this change.
- `npm run build` (Next.js 16.3.4). Exit 0. Sixteen routes generated.
- Python requests to the local server with Host headers for hemayethossain.com, www.hemayethossain.com, hossainconsulting.com, www.hossainconsulting.com and localhost, across `/`, `/privacy`, `/legal`, `/terms`, `/resume`, `/services`, `/about`, `/projects` and `/blog`. No response contained `calendly` or `__BOOKING_URL__`.
- Headless Chrome 156 clicked the personal home, agency home and agency services booking controls. Each navigation landed on the expected CalendarBug URL. Mobile width 390 showed those home buttons at about 55px tall with no horizontal overflow.
- Direct Chrome render of the two booking pages showed “Salesforce intro call with Hossain Consulting” (20 minutes, hiring conversation) and “Free introductory call with Hossain Consulting” (20 minutes, not a paid service booking, New South Wales only). Available times were still “Loading available times...”; no booking was submitted.

Observed result and exit status:
- Personal and www personal hosts, plus localhost: booking href https://www.calendarbug.com/book/hemayet-hossain/salesforce-intro-call
- Agency and www agency hosts: booking href https://www.calendarbug.com/book/hemayet-hossain/free-introductory-call
- Personal `/services` remained 404. Agency `/services` showed one booking link, the agency URL.
- Footers still list the existing site, GitHub, email, privacy, legal/terms and social profiles. No footer booking link was added.

Supporting files: this README. Browser output was inspected in the session and is not stored as screenshots.

Limitations / checks not run:
- No booking was submitted, and CalendarBug slot availability was not confirmed beyond the loading state.
- `npm run lint` for the whole repo still fails on the older evidence script noted above.
- Production sites were not deployed or merged. Live hemayethossain.com and hossainconsulting.com were not rechecked after this local build.
- Dated evidence files and internal brand notes in this repository still contain the old Calendly URL or the name Calendly. They were left as historical records.

Related issue/PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/32
Remote commit for the booking change: ae2f42dcd4121867e1fbbcc19451ae84a8003c67 on `cursor/calendarbug-booking-links-48cd`. This evidence note was updated with that PR link after the pull request was opened.
