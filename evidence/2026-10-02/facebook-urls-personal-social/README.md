# Facebook URL fix and personal footer social row
Date/time and timezone: 2 Oct 2026, evening, Australia/Sydney.
Requirement: Hemayet gave the real Facebook URLs (business and personal) and asked for personal social profiles in the hemayethossain.com footer, starting with Facebook and Instagram.
Environment/target: this repository, branch `claude/facebook-urls-personal-social`, from main at 5f52b57.

## Changes made
- `src/lib/site.ts`: agency Facebook changed from `facebook.com/hossainconsulting` (unconfirmed guess in PR #2) to `facebook.com/profile.php?id=61554142802965`. New `PERSONAL_SOCIAL`: Facebook `profile.php?id=61553978682903`, Instagram `instagram.com/sirhemayethossain/`, X `x.com/himu_sydney`, TikTok `tiktok.com/@sirhemayethossain`, YouTube `youtube.com/@sirhemayethossain`, Pinterest `au.pinterest.com/hemayethossain/` (created by Hemayet on 2 Oct), LinkedIn `linkedin.com/in/hemayethossain/`.
- `src/app/layout.tsx`: the `footer-social` row now shows on both sites (agency list or personal list). The personal LinkedIn link moved from the main footer links into the personal social row, so it still appears once.

## Validation
- `curl -L` on both Facebook URLs: page titles "Hossain Consulting" (business) and "Hemayet Hossain" (personal).
- `npx eslint src/lib/site.ts src/app/layout.tsx`: no errors. `npx next build`: compiled successfully.
- `npx next start -p 3458`, `curl -H "Host: <domain>"`:
  - hossainconsulting.com: 7 links, Facebook is the `61554142802965` URL.
  - hemayethossain.com: "Hemayet Hossain on social media" row with Facebook, Instagram, LinkedIn.
- Correction to this check: an earlier local run on port 3457 hit a leftover server from PR #2's test and showed old output; that server was stopped and the test re-run on 3458.

## Limitations
- Pinterest and LinkedIn links use the public URL; the `actingBusinessId` and `isSelfProfile` query parameters Hemayet pasted were dropped.
- No visual/screenshot check. Not deployed until merged.
