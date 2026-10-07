# Social profile updates in Chrome

Date: 2026-10-03, Australia/Sydney.

## Target and source

Update personal and Hossain Consulting social profiles linked by the website footers. Keep website footer URLs unchanged, remove public phone contacts and use https://calendly.com/hemayet_hossain/20-minute-intro-call. Source: GitHub repository `src/lib/site.ts` and the existing pricing-and-journeys evidence. Work was performed through the connected Chrome browser.

## Verified changes

- Personal Facebook page: added “Book a 20-minute intro call” in Links and a Salesforce candidate bio with portfolio and booking URLs. Saved bio is visible in both the header and About. Contact info showed an add-phone control, with no stored public phone.
- Business Facebook page: removed the stored public phone. Contact info now shows the add-phone control. Added “Book a free 20-minute intro call” in Links. Replaced the old agency bio with the developing CRM/automation practice description and booking URL.
- Personal X: saved Salesforce candidate bio and Calendly website URL; the profile view showed the new bio and booking link.
- Business X: initial submission did not persist and a reload encountered security verification. From a fresh existing signed-in tab, reapplied and saved the developing-practice bio and Calendly website; public profile now displays both. Updated the Location Spotlight website to Calendly too; reopened saved Location editor retained the exact URL and showed Phone Optional (no stored public phone).
- Personal Pinterest: removed the public phone and updated About with truthful candidate/demo information, portfolio and booking URLs. Reloaded edit settings retained the new About and an empty phone field. The immediate public profile view was stale, so public rendering is not independently confirmed.
- Business Instagram: updated the bio to the developing CRM practice and Calendly URL. Public profile shows the new bio. Removed the public business phone; after reloading Professional account settings, the Phone number input was empty. WhatsApp business number was already empty.
- Personal YouTube: published the candidate/demo description and a booking link. The “Changes published” message appeared; reloaded public channel shows the new description and Calendly link.
- Business YouTube: published the developing practice/demo description and a booking link. Fresh public channel About dialog shows the new description, full Calendly URL and booking link.
- Trailblazer: saved Salesforce candidate title and short bio with demo qualifications and booking URL. “Profile saved” success appeared and the profile shows the new title and full bio.

LinkedIn updates and their phone/link validation were published separately in `evidence/2026-10-02/social-profile-calendly/`.

## Validation and limitations

Actual validation used saved success feedback, fresh DOM observations, reloads and screenshots where described above. No website source was changed or deployed. Account recovery/authentication phone settings were not changed.

- Personal TikTok: submitted two valid-length booking bios, but public profile continued to say “No bio yet” and reopened editor was empty after reload. The update is unverified, not completed. A separate draft briefly exceeded the 80-character limit and was shortened before submission.
- Business TikTok: Chrome is signed in as the personal account; business profile has no edit control. Sign-in requested.
- Personal Instagram: absent from Chrome account switcher. Existing-account sign-in requested.
- Business Pinterest: absent from both account selectors in Chrome. Existing-account connection/sign-in requested.
- Instagram's dedicated website field is disabled on desktop and explicitly requires the mobile app. Calendly is in the business bio as text, not a clickable dedicated website link.
- Pinterest's existing claimed website is disabled; it was retained, with booking in About.
- Remaining profile images, banners, category labels and legacy profile links have not all been updated. This record is progress evidence, not completion of every requested profile change.

## Supporting files

Only reviewed screenshots showing task-related public profile information are included. Private phone values, login codes, passwords and account recovery details are excluded. Some initial Facebook screenshots were below the Links section and did not show the result; they were replaced or omitted rather than presented as proof. Public screenshots containing unrelated subscription lists were omitted.

- `facebook-personal-calendly.jpg`, `facebook-personal-bio.jpg`
- `facebook-company-calendly.jpg`, `facebook-company-bio.jpg`, `facebook-company-phone-removed.jpg`
- `x-personal-bio.jpg`, `x-company-calendly.jpg`
- `pinterest-personal-profile.jpg`
- `instagram-company-bio.jpg`
- `youtube-personal-calendly.jpg`
- `trailblazer-calendly.jpg`

Related PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/5
