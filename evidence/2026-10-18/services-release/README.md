# Approved services catalogue release

Date: 18 October 2026 (Australia/Sydney).
Targets: hossainconsulting.com and hemayethossain.com, shared Next.js deployment.

## Changes
Publish the reviewed four-package catalogue, workflow tiers, chat/AI options, quantities and additional costs. Align both homepages and legal/privacy notices with client-owned tools, direct vendor billing, optional referral purchases and explicit testing status. Preserve candidate positioning on the personal site and existing offer eligibility. No fixed deposit percentage or setup-payment split is introduced. Catalogue publication does not open paid bookings or activate advertising, messaging, AI, payments or tracking.

The approved preview layout is integrated using isolated catalogue classes to avoid collisions with existing site styles. Introductory booking, email and policy links are functional. Static HTML comes only from reviewed build-time content, never visitor input.

## Actual validation before release
- npm run build: exit 0; compilation, TypeScript and route generation passed.
- npx --no-install eslint on all five changed TSX pages/components: exit 0.
- git diff --check: exit 0.
- Local production HTTP checks with both intended Host headers: seven expected 200 responses and personal /services expected 404; recorded in route-checks.json. Catalogue assertions verified core prices, workflow/chat presence, testing/extra-cost labels, and absence of removed 50% wording, unpublished labels, stale preview wording and encoding artefacts.
- Browser desktop 1280x900 and phone viewport 390x844: inspected rendered catalogue and package cards; no horizontal page overflow. Screenshots desktop.png and mobile.png.
- Browser Collapse all details produced 0 open details; Expand all details produced 15. Introductory links point to existing Calendly and agency email; no booking submitted.
- React review: server-side site selection retained, small client-only details controller, no new fetch effects, trackers or dependencies. Static trusted content is not an input sanitization mechanism for future visitor content.

## Limits
This is a website publication check, not service delivery acceptance, legal review, tax registration verification, payment setup, ad-account access testing, email/SMS deliverability testing or CRM/chat/AI/workflow certification. These remain explicitly incomplete. Live deployment verification is pending and will be recorded separately after release.

## Production verification
- Release PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/24 (merged).
- Published main commit: https://github.com/hossainconsulting/hossainconsulting-portfolio/commit/e539a214983387acb8f7dda7492cbbac89a27973.
- Vercel production commit status: success, deployment https://vercel.com/hossain-consulting/hossainconsulting-portfolio/2XFsbnvwBSGu5BXTTtUUKtnhNckX.
- Ran `python evidence/2026-10-18/services-release/check-live.py`: exit 0 at 2026-10-17 13:15 UTC (18 October Sydney). Seven public pages returned HTTP 200 and passed release-content assertions. Exact checked URLs are in live-checks.json; no enquiry, booking or payment was submitted.
- Fresh browser inspection of https://hossainconsulting.com/services#packages confirmed the four published cards; live-desktop.png is the current production screenshot.
- Personal homepage browser inspection retained Salesforce candidate/recruitment positioning and linked the agency catalogue with preparing status.
- No vendor accounts, ad campaigns, messaging sends, payment-provider settings, referral trackers or customer systems were activated. All service-readiness limitations above remain.

The initial screenshots and checks describe the local pre-release build. live-desktop.png and live-checks.json describe production after the merged commit. This follow-up evidence changes no application source.
