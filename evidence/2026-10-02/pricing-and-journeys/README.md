# Published prices, free snapshot offer and booking-to-handover journeys

Date/time and timezone: 2026-10-02, Australia/Sydney (UTC 2026-10-01 late evening).

Requirement or issue: Hemayet asked to apply the recommended founding-client pricing (his
business is GST registered), add a free offer to attract first clients, and explain every
step from booking to handover for clients and from booking to offer for recruiters.

Environment/target: Branch `claude/website-access-065fb2` (PR #1). Local production build,
Node.js 22.22.0. Not deployed.

Changes made:

- `/services` (agency only): each package lists its included scope, a founding-client price
  shown "+ GST" with the GST-inclusive total, and the standard price.
  - Enquiry & follow-up setup: $1,500 + GST ($1,650 inc.). Standard $2,400 + GST.
  - CRM tidy-up & handover map: $950 + GST ($1,045 inc.). Standard $1,500 + GST.
  - AI-assisted admin trial: $1,200 + GST ($1,320 inc.). Standard $1,800 + GST.
  - Optional care plan: $200 + GST a month ($220 inc.). Standard $300 + GST.
  - Founding prices apply to the first 3 clients.
- Free offer: a one-page workflow snapshot with up to 3 quick wins, delivered within 3
  business days of the free call, whether or not the client goes ahead.
- Eight-step "From booking to handover" journey: book, call, snapshot, written scope and fixed
  quote, 50% deposit on a tax invoice, build and test with weekly updates, handover with the
  final 50%, then 14 days of support. Includes a GST registration and ABN statement.
- `/resume`: six-step "From first chat to offer" section for recruiters (book, intro call,
  portfolio walkthrough, practical task, credentials and references, offer and start). The home
  hero links to it.
- Calendly correction to the 2026-10-01 evidence: the account allows one active event type.
  Both sites now link to a single shared event, "20-minute intro call"
  (https://calendly.com/hemayet_hossain/20-minute-intro-call), whose description covers
  business owners and recruiters. The "Free 20-minute workflow chat", "Recruiter & hiring
  manager chat" and the older "Elevate Your Business" event types are inactive. Hemayet chose
  this free option over a paid upgrade.

Validation procedure/command and observed result:

- `npm run lint` exit 0 (one unused-import warning was found and removed); `npm run build`
  exit 0.
- Rendered-text check of agency `/services`: all prices, GST-inclusive totals, the snapshot
  offer, "14 days of support", the ABN and "first 3 clients" were present.
- Host-header curl: agency `/`, `/services`, `/blog` and personal `/`, `/resume`, `/blog`
  link only `20-minute-intro-call`, with 0 links to the retired booking URLs. Personal
  `/services` returns 404.
- Calendly API: listing active event types returned only "20-minute intro call".
- Playwright at 1440×900 and 390×844 (agency `/services`, personal `/resume`): client width
  equalled scroll width. A CSS specificity bug that rendered prices at body size was fixed
  before the final screenshots.

Limitations / checks not run:

- calendly.com is blocked from this container; the booking page itself was not opened.
- Competitor prices behind the pricing are indicative (from search summaries; the pages
  could not be fetched). Hemayet should confirm GST presentation with his accountant.
- Commitments now published that Hemayet must keep: snapshot within 3 business days, recruiter
  replies within 2 business days, referees on request.
