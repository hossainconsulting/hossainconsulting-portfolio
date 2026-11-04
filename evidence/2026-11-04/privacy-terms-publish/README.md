# Publish privacy policy and terms on hossainconsulting.com (4 Nov 2026)

**Requested by:** Hemayet, 4 Nov 2026 ("publish"), after approving the drafts in
`hossainconsulting/brain` `resources/policies/privacy-policy-draft.md` and
`terms-draft.md` ("all ok").
**Target:** hossainconsulting.com `/privacy` (existing page, updated) and `/terms` (new).

## What changed
- `src/app/terms/page.tsx` (new): the approved Terms and Conditions text, dated
  4 November 2026, canonical https://hossainconsulting.com/terms.
- `src/app/privacy/page.tsx`: updated date to 4 November 2026. Added an agency-only
  section with the approved draft content: who we are (ABN), what we collect and
  how, no selling, marketing consent and unsubscribe within 5 working days,
  service providers including overseas, retention. Added "within 30 days" to the
  access/correction and complaint replies. Existing content was kept.
- `src/app/legal/page.tsx`: on the agency site, a note linking to /terms and saying
  the Terms apply where they differ from this page.
- `src/app/layout.tsx`: agency footer now links "Terms" (/terms) and "Notices" (/legal).
  The personal site's footer is unchanged.
- `src/app/sitemap.ts`: /terms added to the agency sitemap.

## Validation (run in the cloud session, 4 Nov 2026)
- `npm ci`, then `npm run build`: exit 0; route list includes `/terms`.
- `npm run lint`: exit 1 with 4 errors, all in `evidence/2026-10-09/reddit-footer/verify.cjs`
  (require imports). The same 4 errors occur on unmodified main (baseline exit 1),
  so they are not from this change.
- `next start` locally with `Host: hossainconsulting.com`: /terms, /privacy, /legal,
  /sitemap.xml all HTTP 200. /privacy contains "Updated 4 November 2026", "within 5
  working days", "ABN 23 732 235 722", "within 30 days", "do not sell". /terms contains
  "Last updated 4 November 2026", NSW governing law, month to month, include GST.
  The sitemap lists hossainconsulting.com/terms; the footer links /terms.
- With `Host: hemayethossain.com`, the agency-only marketing section is not shown (0 matches).
- Live production check after deploy: see the PR / follow-up note.

## Limitations
- No lawyer has reviewed the text; the brain draft recommends one.
- `/legal` still has older agency wording (e.g. a CRM setup price of A$2,640 and
  "payment processing ... still being finalised"). That differs from the current
  price (A$1,290 setup + A$149/month incl. GST). It was not changed here; flagged to Hemayet.
- No personal data, secrets or home address are in this change.
