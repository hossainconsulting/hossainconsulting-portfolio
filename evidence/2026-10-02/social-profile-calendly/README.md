# Social profile updates and Calendly contact

Date: 2026-10-02, Australia/Sydney.

Requirement: Update the personal and business social profiles linked from both websites, retain the footer URLs, remove public mobile numbers and use the established Calendly booking link.

Target: Existing Hemayet Hossain and Hossain Consulting LinkedIn profiles, managed through the signed-in Codex browser. Other linked platforms remain pending.

## Source

Reviewed origin/main:src/lib/site.ts and the pricing-and-journeys evidence. BOOK_CALL, BOOK_CLIENT_CALL and BOOK_RECRUITER_CALL use https://calendly.com/hemayet_hossain/20-minute-intro-call. Earlier event URLs are superseded by the single shared event. Website source and footer links were not changed.

## Changes applied

- Personal LinkedIn: main website points to hemayethossain.com with the label Portfolio & background. About describes the Salesforce recruitment focus, self-directed portfolio, developing practice and relevant website links. Public contact phone cleared; obsolete Calendly URL removed from the address field; current booking event added as a website of type Other.
- Company LinkedIn: old cybersecurity/digital-marketing tagline replaced by CRM & automation for trade and home-service businesses | A developing Sydney practice. Overview aligned to the website, explicitly identifying simulations and no client engagements to date. Website changed to HTTPS and company size to 0-1 employees. Public phone cleared. Contact us custom button now points to the shared Calendly event.

## Actual verification

- Personal introduction save displayed Save was successful. About save displayed Your about section has been updated, then the profile rendered the new text.
- Personal contact save returned the contact dialog containing the current Calendly website and existing site links, with no Phone or Address entry.
- Company saves displayed the Share your page edits dialog. Declined creating announcement posts.
- Reopened the company details page: overview and HTTPS website persisted; read-only DOM check of the Phone input returned companyPhoneEmpty: true.
- Opened company Buttons after saving: Contact us selected and URL field contained the exact shared Calendly event.
- Public company member view displayed the new tagline and 0-1 employees.
- Supporting screenshots: linkedin-personal-calendly.jpg (cropped to exclude unrelated email/birthday) and linkedin-company-calendly.jpg (button configuration, no mobile number).

## Limitations and pending work

- LinkedIn reported a concurrent-admin conflict when saving another section after an earlier save. Preserved draft text, reset only this task's unsaved form, opened a fresh editor and retried successfully. Final persisted fields were verified as described above.
- Facebook remains in account verification; Instagram remains at login/account selection. Neither was edited.
- X showed a login prompt and was not edited. YouTube and TikTok public profiles were inspected but no editor access was established and neither was edited. Pinterest and Trailblazer have not yet been inspected. No blanket claim of phone removal across all social platforms is made.
- Profile images, older posts, specialties and LinkedIn services have not been updated. The overall social-profile task remains incomplete.
- Account authentication/recovery phone numbers were not changed. No credentials, mobile numbers or private account details are included in this evidence.
- Calendly URL was verified against GitHub configuration; booking submission was not tested.
