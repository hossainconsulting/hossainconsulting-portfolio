# Remove the free "one agreed small fix" offer from the agency /services page
Date/time and timezone: 2026-10-15, Australia/Sydney.
Requirement: Hemayet decided there will be no free workflow, snapshot or other free services. The agency `/services` page still listed a free "One agreed small fix" (up to two hours) for the first three clients, which conflicted with that decision and with the updated Calendly intro-call description and the new funnel in `hossainconsulting/portfolio` PR #28.
Environment/target: branch `claude/inbound-funnels-email-sequences-7en5ft` off `main` (317448c), local production build, Node.js v22.22.0 (README asks for Node 24; the build still passed). Not deployed.

## Changed (one file: `src/app/services/page.tsx`)
- Removed the free "One agreed small fix" card; the two paid launch cards are now numbered 01 and 02.
- Heading "The first three clients." changed to "Launch pricing."
- "The launch offer ends after three completed projects" changed to "Launch pricing ends after three completed projects".
- "disclosure of free or discounted work" changed to "disclosure of discounted work".
- Unchanged: the A$825 and A$1,650 launch prices, the A$2,640 standard price, and the free 20-minute introductory call, which Hemayet kept.

## Validation actually run
- `npx eslint src/app/services/page.tsx`: exit 0.
- `npm run build`: exit 0 (`/services` listed as a dynamic route).
- `next start` on port 3199, request with `Host: hossainconsulting.com` to `/services`: the rendered output contains "Launch pricing.", the A$825 and A$1,650 cards, the A$2,640 standard price and "discounted work"; it contains no "One agreed small fix" and no "Up to two hours". The only remaining "free" wording is the free introductory call. Request to `/services` without the agency host returned HTTP 404 (personal site has no services page), as before.

## Not verified / limitations
- No browser rendering or screenshots; checked server-rendered text only.
- Not deployed; the live site still shows the free offer until this is merged and deployed.
- The launch pricing structure is Hemayet's decision: two launch price points (A$825, A$1,650) remain while the text still says launch pricing ends after three completed projects. Hemayet should confirm whether a third launch slot or price is wanted.
- The free-offer wording elsewhere (home page, privacy, legal) refers only to the free introductory call and was not changed. Terms, privacy and payment wording still await legal review.
- Related: `hossainconsulting/portfolio` PR #28.

## Addendum: launch price labels and end point (2026-10-15)
Hemayet asked that the first launch price be half the second. It already is: A$825 is half of A$1,650 (A$750 and A$1,500 excluding GST; the standard A$2,640 is A$2,400 excluding GST). Two launch prices remain, so the page was edited to match:
- Card headings "Full package" changed to "First launch client" (A$825) and "Second launch client" (A$1,650).
- "Launch pricing ends after three completed projects" changed to "after two completed projects"; the standard A$2,640 applies thereafter.
Validated: `npx eslint src/app/services/page.tsx` exit 0; `npm run build` exit 0; `next start` with `Host: hossainconsulting.com`: `/services` shows the two new headings, the A$825 and A$1,650 prices and "after two completed projects", with no "three completed projects" in the launch note.
Not changed: the review-policy sentence still says "We will not request Google reviews from the first three clients"; Hemayet should decide whether that policy applies to the two launch clients only or still to the first three. Not deployed; text checked server-side only.
