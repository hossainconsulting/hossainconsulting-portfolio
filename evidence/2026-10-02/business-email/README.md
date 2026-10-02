# Confirmed business email and name

Date: 2 October 2026, UTC. Owner explicitly confirmed hemayet@hossainconsulting.com and Hossain Consulting.

Changes: replaced the old Gmail address in the shared site email constant, contact constants and agency homepage structured data. Updated the listing plan to the confirmed name/email, retained private-phone/address restrictions, and corrected the reminder status to the successfully scheduled 3 October, 2 p.m. Sydney reminder. Historic evidence is preserved.

Validation: npm run lint, direct TypeScript check and git diff --check all exit 0. Source-value check confirms all three source files contain the new email and no longer contain the old Gmail address. Existing shared EMAIL consumers therefore use the new mailto destination. Full production build/browser verification remains outstanding as previously recorded in PR #6. No test email sent; mailbox existence, MX routing and delivery are unverified. No mailbox created, DNS changed or directory submitted. Review branch updated; production is not changed by this commit.
