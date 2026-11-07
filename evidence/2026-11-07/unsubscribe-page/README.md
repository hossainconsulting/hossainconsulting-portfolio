# Unsubscribe pages for both public sites

Date/time and timezone: 7 November 2026, about 09:10–09:42 UTC
Requirement or issue: `/unsubscribe` returned HTTP 404 on both public sites, while the agency privacy notice already promised a working unsubscribe.
Environment/target: this repository, local Next.js 16.3.4 production server on `127.0.0.1:3456`. Host routing uses `getSite()` in `src/lib/site.ts`. No production deploy and no environment or secret changes.

Starting state:
- `curl -sI` against live HTTPS, before any local hosts override:
  - `https://hemayethossain.com/unsubscribe` HTTP 404
  - `https://hossainconsulting.com/unsubscribe` HTTP 404
  - `https://www.hemayethossain.com/unsubscribe` HTTP 308 to `https://hemayethossain.com/unsubscribe`
  - `https://www.hossainconsulting.com/unsubscribe` HTTP 404
- There was no `src/app/unsubscribe` route. Open pull request #28 (honest pre-launch notices) was left untouched.

Changes made:
- `src/app/unsubscribe/page.tsx`: host-aware page. The button is a `mailto:` to `site.email` (`hemayet@hemayethossain.com` on the personal site, `hemayet@hossainconsulting.com` on the agency site, including `www`). No form and no new service. The agency page repeats the published “within 5 working days” line. The personal page does not add that timeline.
- `src/app/sitemap.ts`: `/unsubscribe` added for both hosts, using each host’s existing origin.
- `src/app/layout.tsx`: footer link “Unsubscribe” placed with the existing Privacy / Terms / Notices links on both hosts.
- `src/app/privacy/page.tsx`: the existing agency marketing sentence now links the word “unsubscribe” to `/unsubscribe`.

Validation procedure/command:
- `npx eslint src/app/unsubscribe/page.tsx src/app/sitemap.ts src/app/layout.tsx src/app/privacy/page.tsx`: exit 0.
- `npm run lint`: exit 1. The only errors are the four pre-existing `@typescript-eslint/no-require-imports` findings in `evidence/2026-10-09/reddit-footer/verify.cjs`. None are in this change.
- `npm run build`: exit 0. The route list includes `ƒ /unsubscribe`.
- `npm run start -- --port 3456`, then a Python `urllib` check with `Host` headers for `hemayethossain.com`, `www.hemayethossain.com`, `hossainconsulting.com`, and `www.hossainconsulting.com`: exit 0, 37 passed, 0 failed. Checked HTTP 200, the matching public email, absence of the other site’s email, no `<form>`, host canonical, footer link, sitemap URL on the correct origin only, agency privacy in-page link, and that an unknown path is still 404.
- Browser, with those hostnames pointed at `127.0.0.1` and HTTP port 3456: personal homepage footer Unsubscribe opened the personal page; the button opened the system mail-app chooser and the status bar showed `mailto:hemayet@hemayethossain.com?subject=Unsubscribe%20request&body=...`. No email was sent. Agency `/unsubscribe` showed `hemayet@hossainconsulting.com` and the 5-working-day sentence. The privacy-page unsubscribe link returned to `/unsubscribe`. The agency footer lists Unsubscribe with Privacy, Terms, and Notices. A 390px-wide view kept the email and button on screen without horizontal scrolling.

Observed result and exit status:
- Local `/unsubscribe` is HTTP 200 on both hosts with the correct `mailto`. Live production is still HTTP 404 until this branch is deployed. This task does not deploy.

Supporting files:
- This note. Browser screenshots and the walkthrough recording were kept as session artifacts, not committed.

Limitations / checks not run:
- No mail was sent, so inbox handling and the 5-working-day response were not exercised. Opt-out still depends on the visitor’s email application and a person reading `site.email`. There is no suppression-list backend.
- `www` hosts were checked with `Host` headers against the local server, not in the browser.
- Production after merge was not checked, because this change is not deployed.
- `npm run lint` remains exit 1 for the unrelated existing evidence script.

Related issue/PR:
- Draft pull request: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/33
- Branch `cursor/unsubscribe-page-2b37`. Not merged. Not mixed with pull request #28.
