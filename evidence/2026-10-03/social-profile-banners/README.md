# Social profile banners

Date: 2026-10-03, Australia/Sydney.
Request: change banners for the personal and business social profiles, using GitHub branding and canonical website URLs.
Target: existing public profiles, controlled through the signed-in Chrome browser. Related PR: https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/5

## Changes

Created matching cream, forest-green and lime banners using the built-in image generator. Branding came from src/app/globals.css (#f8f7f2, #183e32, #d9ed97) and identity/URLs from src/lib/site.ts. No website code was changed or deployed.

Personal copy: Hemayet Hossain; Salesforce Admin / Support candidate; 4x Salesforce certified · Sydney; hemayethossain.com.
Business copy: Hossain Consulting; CRM & automation for trade and home services; Sydney · Founding-client enquiries welcome; hossainconsulting.com.

## Actual validation

| Target | Procedure and observed result |
| --- | --- |
| Facebook personal, page61553978682903 | Uploaded personal-social-banner.png through Edit cover photo; Save changes; reloaded. New cover and all text visible. |
| Facebook business, page61554142802965 | Uploaded business-social-banner.png; Save changes; reloaded. New cover and all text visible. |
| LinkedIn /in/hemayethossain/ | Changed background image, checked crop, Save changes; reloaded. New banner visible. Safe screenshot excludes recruiter-only information and sidebar. |
| LinkedIn /company/hossain-consulting/ | Edit Page banner; Change image; Apply. Cover image updated toast. Declined optional share post. Member view reloaded and new cover visible. |
| YouTube @sirhemayethossain | Studio Profile banner Change; uploaded personal-youtube-banner.png; checked all-devices crop; Done; Publish. All changes saved observed. Public channel showed new banner and URL. |
| YouTube @hossain-consulting | Switched to business account; Studio banner Change; uploaded business-youtube-banner.png; checked all-devices crop; Done; Publish. Publish became disabled; public channel reloaded and new banner/URL visible. |

All screenshots were reviewed visually. Screenshots correspond to saved public views, not upload previews. Facebook cover changes may produce the platform's normal cover-update feed entry; no separate post was composed. LinkedIn optional company share was declined.

## Assets and limitations

The two social PNGs are 2172 x 724. YouTube variants are 1672 x 941 and were accepted by Studio; these are below its recommended size (Studio displayed 2048 x 1152; crop dialog recommended 2560 x 1440). Safe areas were visually checked; no physical-device tests were run. Image-generation requests for larger dimensions did not produce larger output; a redundant personal variant was discarded.

X navigation to HossainConsult redirected to /account/access with the currently selected personal account locked by an age-at-creation restriction. Neither X banner was updated. No recovery/security restriction was bypassed. Pinterest business access remains unavailable from earlier profile work; no Pinterest banner update is claimed. Instagram, TikTok and Trailblazer banners were not changed in this task.

Only the explicitly listed banner assets and reviewed public screenshots are included. No raw browser session, login identifiers, credentials, private recruiter information or unrelated files are published.

No application tests/build were required for external profile and evidence-only changes. git diff --check was run before commit; GitHub publication is verified separately by the commit API and remote branch SHA.
