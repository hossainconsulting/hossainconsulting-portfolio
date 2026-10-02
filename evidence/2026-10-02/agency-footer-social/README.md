# Agency footer: seven Hossain Consulting social pages
Date/time and timezone: 2 Oct 2026, evening, Australia/Sydney.
Requirement: Hemayet asked for the 7 business social pages in the footer of hossainconsulting.com only. hemayethossain.com stays unchanged.
Environment/target: this repository (serves both domains by Host header via `getSite()`), branch `claude/agency-footer-social`.

## Starting state
The footer for both domains showed: cross-site link, GitHub, personal LinkedIn profile, Email, Privacy, Terms. No business social pages.

## Changes made
- `src/lib/site.ts`: `AGENCY_SOCIAL` list of the 7 pages.
- `src/app/layout.tsx`: when `s.agency`, a `footer-social` row with the 7 links (`target="_blank"`, `rel="noopener noreferrer me"`). On the agency site the personal LinkedIn profile link is hidden, so the footer has one LinkedIn link (the company page). The personal site footer is unchanged.
- `src/app/globals.css`: `.footer-social` row style matching `.footer-links`.

URLs (confirmed by Hemayet in chat on 2 Oct for Facebook and LinkedIn; the other five come from his prepared footer snippet):
Facebook https://www.facebook.com/hossainconsulting · Instagram https://www.instagram.com/hossainconsulting/ · X https://x.com/HossainConsult · LinkedIn https://www.linkedin.com/company/hossain-consulting · YouTube https://www.youtube.com/@hossain-consulting · TikTok https://www.tiktok.com/@hossainconsulting · Pinterest https://au.pinterest.com/hossainconsulting/

## Validation
- `npx eslint src/app/layout.tsx src/lib/site.ts`: no errors.
- `npx next build`: completed, route table printed.
- `npx next start -p 3457`, then `curl -H "Host: <domain>" localhost:3457/`:
  - `hossainconsulting.com`: `footer-social` present with all 7 URLs above.
  - `hemayethossain.com`: no `footer-social`; only the personal LinkedIn profile link, as before.
- `curl -L` on each of the 7 URLs: HTTP 200 for all. (200 shows the URL resolves, not that the page is Hemayet's.)

## Limitations / checks not run
- No visual/screenshot check of the new row; layout verified by markup only.
- Not deployed. Production changes only after this PR is merged.
- Page ownership for Facebook and LinkedIn is as confirmed by Hemayet; Facebook content was not viewable without login.
