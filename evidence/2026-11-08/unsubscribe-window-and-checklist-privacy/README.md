# Personal unsubscribe window and live checklist privacy notice

Date/time and timezone: 8 November 2026, about 01:06–01:30 UTC.
Requirement or issue: The personal unsubscribe page did not say requests are acted on within 5 working days. The agency privacy section “Free checklist and email updates” still said sign-ups were not open and that the collection page, email provider and notice would be confirmed before they opened. The checklist form is already live.
Environment/target: this repository, local Next.js 16.3.4 production server on `127.0.0.1:3456`. Host routing uses `getSite()` in `src/lib/site.ts`. Live pages were read before the edit. No production deploy and no environment or secret changes.

Starting state (live HTTPS, before this change):
- `https://hemayethossain.com/unsubscribe` HTTP 200. Mailto `hemayet@hemayethossain.com`. Text ended at “Include the email address you want removed.” No “5 working days” sentence. No form.
- `https://hossainconsulting.com/unsubscribe` HTTP 200. Mailto `hemayet@hossainconsulting.com`. Already included “We act on unsubscribe requests within 5 working days.”
- `https://hossainconsulting.com/privacy` still said the checklist was being prepared, that sign-ups were not collected, and that the provider would be named before sign-ups opened.
- `https://hemayethossain.com/privacy` did not contain the checklist section.

Live checklist inspected in a browser at `https://portfolio.hossainconsulting.com/checklist` on 8 November 2026 (page loaded; the form was not submitted):
- Visible fields: First name; Email; Business name (labeled optional); “What do you do?” dropdown (Choose one, Plumbing / gas, Electrical / solar, HVAC / refrigeration, Building / carpentry, Cleaning / property services, Other trade or home service, I am not a business owner).
- Consent box: “Yes, email me the checklist and related tips from Hemayet Hossain / Hossain Consulting. I can unsubscribe at any time. I have read the Privacy Policy and agree to the Terms.”
- Page copy: “Free. No payment details. One email now, then a short series you can leave with one click.” FAQ: the checklist is sent, then a short series of practical emails; details are not sold; every email has an unsubscribe link. ABN 23 732 235 722 is on the page. No phone field and no street address on the form.
- The same static page in `hossainconsulting/portfolio` `public/checklist.html` (HEAD `737c1a58f5b46476b19884abaaf1c8c71addae72`) matches those fields. First name, email and the consent tick are required by the page. Business name is optional. The trade dropdown is not marked required, so “Choose one” can be left as it is. The submission also carries the page path, the consent-wording date on the form (`2026-10-15`), and campaign tags from the link when the link has them. The server record adds the time it was received. No email-product name appears on the form or in that handler. A hidden blank-field check is not a field people are asked to fill, and it is not described in the notice.

Changes made:
- `src/app/unsubscribe/page.tsx`: the sentence “We act on unsubscribe requests within 5 working days.” is shown for every host, in the same paragraph as “Include the email address you want removed.” The button remains a `mailto:` to `site.email`. No form. Date set to 8 November 2026.
- `src/app/privacy/page.tsx`: the agency-only “Free checklist and email updates” section now describes the live form, the fields above, one email then a short series, one-click leaving, the 5-working-day unsubscribe window, the 24-month retention already on this notice, and an unnamed email service that may process details outside Australia. It links the checklist page and that page’s privacy policy and terms. The personal host does not render this section. The shared notice date is 8 November 2026 on both hosts. Payments wording was left as it was. No phone number or street address was added.

Validation procedure/command:
- `npx eslint src/app/unsubscribe/page.tsx src/app/privacy/page.tsx`: exit 0, before and after the final wording tweak.
- `npm run lint`: exit 1. The only errors are the four pre-existing `@typescript-eslint/no-require-imports` findings in `evidence/2026-10-09/reddit-footer/verify.cjs`.
- `npm run build`: exit 0. Route list includes `ƒ /unsubscribe` and `ƒ /privacy`.
- `npm run start -- --port 3456`, then Python `urllib` with `Host` headers for `hemayethossain.com`, `www.hemayethossain.com`, `hossainconsulting.com`, and `www.hossainconsulting.com`: both unsubscribe URLs HTTP 200, matching mailto, the other site’s address absent, no `<form>`, and the 5-working-day sentence present. Agency privacy contains the live checklist wording and the stale “sign-ups are not open” sentences are absent. Personal privacy has the new date and does not contain “Free checklist and email updates” or the checklist URL.
- Button hrefs: `mailto:hemayet@hemayethossain.com?subject=Unsubscribe%20request&body=...Email%20address%20to%20remove%3A%0A` on the personal host, and the agency address with “Hossain Consulting” in the body on the agency host.
- Chrome, hostnames mapped to `127.0.0.1`, HTTP port 3456: personal and agency `/unsubscribe` at 1280px, and personal `/unsubscribe` at 390px. The 5-working-day sentence, the correct address, and the button are on screen. At 390px the personal page does not scroll sideways. Agency privacy at a 390px layout viewport had `scrollWidth === clientWidth === 390`.
- Browser check of the live checklist form, screenshots named below. No email was sent and the form was not submitted.

Observed result and exit status:
- Local pages match the wording above. Live production still shows the old personal unsubscribe page and the old agency checklist section until this branch is deployed. This task does not deploy.

Supporting files:
- `personal-unsub-desktop.png`, `personal-unsub-mobile.png`, `agency-unsub-desktop.png`, `agency-privacy-checklist.png` (local server).
- `live-checklist-form.webp`, `live-checklist-trade-options.webp` (live checklist page).

Limitations / checks not run:
- No mail was sent, so inbox handling and the 5-working-day response were not exercised. Opt-out still depends on the visitor’s email application and a person reading `site.email`.
- The email service is not named in the form or the handler, so this notice does not name one. Whether that service stores data in a particular country was not verified; the notice says it may process details outside Australia.
- The 24-month retention sentence is the period already published on this notice and on the portfolio privacy policy. A deletion job was not inspected.
- The trade dropdown is not enforced as required. The notice says what you do is kept if you chose one.
- Wording was not legally reviewed. Payment processing is still described as not available.
- `npm run lint` remains exit 1 for the unrelated existing evidence script.

Related issue/PR:
- https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/34
- Commit: https://github.com/hossainconsulting/hossainconsulting-portfolio/commit/5766d48f814b00abc8645d09971823a9b7299fe8
- Branch `cursor/privacy-unsubscribe-copy-3158`. Not merged. Not deployed.
