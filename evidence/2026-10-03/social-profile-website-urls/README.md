# Social profile website URL correction

Date: 2026-10-03, Australia/Sydney.

## Requirement and source

Use https://hemayethossain.com for personal social profiles and https://hossainconsulting.com for business profiles. Retain the separate booking link https://calendly.com/hemayet_hossain/20-minute-intro-call. Canonical domains come from src/lib/site.ts in this GitHub repository. Work used the connected Chrome browser. Website footer links and website source were unchanged.

## Actual changes and verification

- Personal Facebook (page 61553978682903): replaced legacy 100millionticket.com link with Personal website, https://hemayethossain.com. After Save, Links displayed the personal domain and separate booking link. After switching to the business page, the personal public view still displayed both destinations.
- Business Facebook (page 61554142802965): replaced legacy 100millionticket.com link with Business website, https://hossainconsulting.com. Saved Links region displayed the business domain and booking link; Facebook wrapper destination was HTTPS.
- Business X (@HossainConsult): replaced Calendly in the main Website and Location Spotlight Website with https://hossainconsulting.com. Moved booking into the bio. Saved, then navigated to the public profile: both website surfaces displayed the business domain and bio displayed Calendly.
- Personal YouTube (@sirhemayethossain): made Personal website, https://hemayethossain.com, the first external link; retained booking as the second external link. Published. Reloaded public channel showed the personal domain as primary; About displayed both full link destinations.
- Trailblazer (hemayethossain): replaced portfolio.hossainconsulting.com in My Website with https://hemayethossain.com. Saved and reloaded; public Website linked by Hemayet href became https://hemayethossain.com/. Reopened editor retained the saved personal domain. Company Website already remained https://hossainconsulting.com/.
- Business YouTube (@hossain-consulting): read-only fresh About verification confirmed existing Visit us link targets https://hossainconsulting.com/ and booking link remains present. No edit necessary.

Validation used saved UI observations, fresh navigation/reload, DOM-visible field/link destinations and reviewed screenshots. No automated code tests apply to these external profile edits.

## Remaining restrictions

- Personal X: switching into @himu_sydney encountered security verification. A fresh profile-settings tab then displayed Your account is locked, with X's age-at-account-creation restriction. No recovery form or age verification submitted. Website correction could not be completed.
- Personal Instagram, business Pinterest and business TikTok still require account access as recorded in the preceding social-profile-calendly evidence.
- Instagram's dedicated website field requires its mobile app; desktop cannot edit it. Business already displays hossainconsulting.com, but its exact HTTPS correction remains unverified.
- Personal Pinterest's website field remains locked to its existing claimed blog domain. Claim migration was not performed. Personal TikTok's web editor did not expose a website field, and its prior bio submissions did not persist.
- LinkedIn personal/business domains were already set correctly in the 2026-10-02 evidence; they were not re-edited or independently revalidated this turn.
- Profile images/banners and unrelated historical posts are outside this URL correction and remain unfinished from the broader task.

## Supporting files and data review

Included reviewed public screenshots: facebook-personal-website.jpg, facebook-company-website.jpg, x-company-website.jpg, youtube-personal-website.jpg, youtube-company-website.jpg and trailblazer-website.jpg. The Trailblazer reopened editor screenshot was excluded because it exposed a non-public work email; exact persisted URL was verified through the field and public href instead. No credentials, authentication codes, private phone values or account recovery data are included.

Related PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/5
