# Client-landing and job-landing improvements

Date/time and timezone: 2026-10-01, Australia/Sydney.

Requirement or issue: Hemayet asked to turn hossainconsulting.com into a client-landing tool and
hemayethossain.com into a job-landing tool, staying truthful with clients and recruiters.

Environment/target: Branch `claude/website-access-065fb2` (PR #1). Local production build,
Node.js 22.22.0. Not deployed.

Changes made:

- Calendly (Hemayet's connected account), two new event types created through the Calendly API:
  - "Free 20-minute workflow chat": https://calendly.com/hemayet_hossain/free-20-minute-workflow-chat
  - "Recruiter & hiring manager chat" (15 or 30 min): https://calendly.com/hemayet_hossain/recruiter-hiring-manager-chat
  Both descriptions state that portfolio work is self-directed or simulated, with no paid client
  engagements. The existing "Elevate Your Business: Strategic Consultation" event type was not
  changed, and the site does not link to it (see limitations).
- Agency site: new `/services` page (404 on the personal host) with three fixed-scope packages,
  "fixed price, quoted after the free call" (no prices invented), a four-step process, and a
  founding-client offer that states there are no client engagements to date. Services nav link;
  hero and contact band now lead to the free-call booking; `/services` added to the agency sitemap.
- Personal site: "Open to Salesforce Administrator & CRM support roles · Sydney" status strip;
  "Recruiter? Book a 15-min chat" in the hero, contact band and résumé page. The résumé-by-email
  request is kept.
- Privacy notice: new "Booking a call" section about Calendly; date updated. Legal notice: agency
  "About" sentence now mentions services by separately agreed written scope; date updated.

Validation procedure/command and observed result:

- `npm run lint` exit 0; `npm run build` exit 0 (`/services` route listed); `git diff --check` exit 0.
- `curl -H "Host: ..." localhost:3100`: `/services` returned 200 on hossainconsulting.com and 404 on
  hemayethossain.com. Home, résumé, privacy and legal pages returned 200. Agency pages link only
  the client booking URL; personal pages link only the recruiter booking URL. The agency nav
  contains `/services`. The agency sitemap lists `/services`; the personal sitemap does not.
- Playwright at 1440×900 and 390×844 for agency `/services` and `/`, and personal `/` and
  `/resume`: client width equalled scroll width in all eight cases. Screenshots are in this folder.

Limitations / checks not run:

- calendly.com is blocked by this container's network policy, so the booking pages were not
  opened. The URLs come from the Calendly API responses that created the event types.
- The pre-existing Calendly event "Elevate Your Business: Strategic Consultation" describes a
  "proven track record", "testimonials and success stories from satisfied clients" and "case
  studies". That contradicts the sites' statement of no client engagements, so Hemayet should
  edit or deactivate it. It was left unchanged pending his decision.
- No analytics were added: the privacy notice requires review before analytics are introduced.
- Pricing is Hemayet's decision; the site says only "fixed price, quoted after the free call".
