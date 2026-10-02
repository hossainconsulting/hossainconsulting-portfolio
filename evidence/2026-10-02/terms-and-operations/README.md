# Updated website terms, cooling-off, free pilot and availability

Date/time and timezone: 2026-10-02, Australia/Sydney.

Requirement or issue: Hemayet asked to update the terms on both websites, add a cooling-off
period for new clients, offer free work to the first 3 clients for honest reviews, and state
that he is an Australian citizen open to work in Australia and overseas.

Environment/target: Branch `claude/website-access-065fb2` (PR #1). Local production build,
Node.js 22.22.0. Not deployed.

Research basis (pages found through web search; summaries, not legal advice):

- Unsolicited consumer agreements: 10 business days cooling-off, during which no payment may be
  accepted and no services supplied ([NSW Government](https://www.nsw.gov.au/legal-and-justice/consumer-rights-and-protection/guarantees-contracts-and-warranties/unsolicited-consumer-agreements)).
- ACL "consumer" includes businesses buying services of $100,000 or less ([business.gov.au](https://business.gov.au/legal/fair-trading/australian-consumer-law-and-your-business)).
- Tax invoices of $1,000 or more need the buyer's identity or ABN ([ATO](https://tdv.ato.acc.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices)).

Changes made:

- Agency `/legal`: "Services, payments and cancellation" now summarises the Client Service
  Agreement: 10-business-day cooling-off for new clients with no payment or work during it; GST
  registration and ABN; 50/50 invoices, each due in 7 days; free bank transfer or PayID; no late
  fees; free pilots; cancellation with refund of any unused deposit; AI and data handling.
- Personal `/legal`: no client terms. States that bookings create no engagement, and that he is an
  Australian citizen open to roles in Australia and overseas.
- `/services`: a new "Cooling-off" step in the journey (now 9 steps). The deposit step states
  7-day terms and payment methods. Founding section: the first 3 clients may choose a free pilot
  (CRM tidy-up & handover map, normally $950 + GST); founding prices apply until 3 published
  reviews.
- `/resume`: "Australian citizen · Open to roles in Australia and overseas"; the offer step
  mentions visa and relocation for overseas roles. Both legal pages are dated 2 October 2026.

Validation procedure/command and observed result:

- `npm run lint` exit 0 (no warnings); `npm run build` exit 0.
- Rendered-text checks via host-header curl: agency `/legal` contains the cooling-off, ABN,
  refund and AI clauses; personal `/legal` contains the citizenship statement and no client
  cooling-off terms; `/services` contains the cooling-off step, free pilot and review threshold;
  `/resume` contains the citizenship line.
- Playwright at 1440×900 and 390×844 for agency `/legal` and `/services` and personal `/legal`:
  client width equalled scroll width in all six cases.

Limitations / checks not run:

- The terms and contract templates have not had legal review; Hemayet plans a lawyer review
  before the first client.
- Not deployed; live domains are unreachable from this container.
