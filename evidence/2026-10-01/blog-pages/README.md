# Blog pages on both sites

Date/time and timezone: 2026-10-01, Australia/Sydney.

Requirement or issue: Hemayet asked for a `/blog` URL on hemayethossain.com and on
hossainconsulting.com, each with five named series and room to add more as content grows.

Environment/target: Local production build (`next build` + `next start` on port 3100) in a
cloud container. Not deployed. The live domains were not reachable from this container
(network policy), so no production check was done.

Starting state: Commit 621171c on `main`. No blog routes existed.

Changes made:

- `src/lib/blog.ts`: series and posts data. Five series per site; `posts` starts empty.
  New series or posts are added by appending entries.
- `src/app/blog/page.tsx`: host-aware `/blog` index listing that site's series, plus latest posts
  once any exist.
- `src/app/blog/[series]/page.tsx`, `src/app/blog/[series]/[post]/page.tsx`: series and post pages.
  Each returns 404 on the site that does not own the series.
- `src/components/PostList.tsx`, CSS additions in `globals.css`.
- Nav: "Blog" link on both sites. Sitemap: `/blog`, series pages and future posts per host.

| hemayethossain.com/blog | hossainconsulting.com/blog |
|---|---|
| Forward Notes (`/blog/forward-notes`) | The Automation Brief (`/blog/the-automation-brief`) |
| Hemayet Builds (`/blog/hemayet-builds`) | Field Notes (`/blog/field-notes`) |
| The Build Log (`/blog/the-build-log`) | Practical AI for Business (`/blog/practical-ai-for-business`) |
| Notes from the Org (`/blog/notes-from-the-org`) | CRM That Works (`/blog/crm-that-works`) |
| Working in Public (`/blog/working-in-public`) | Hossain Insights (`/blog/hossain-insights`) |

Validation procedure/command and observed result:

- `npm run lint`: exit 0. `npm run build`: exit 0 (routes `/blog`, `/blog/[series]`,
  `/blog/[series]/[post]` listed). `git diff --check`: exit 0.
- `curl -H "Host: <domain>" http://localhost:3100<path>`:
  - All five personal series pages and `/blog` returned 200 on `Host: hemayethossain.com`,
    with canonical URLs on hemayethossain.com.
  - All five agency series pages and `/blog` returned 200 on `Host: hossainconsulting.com`,
    with canonical URLs on hossainconsulting.com.
  - Cross-site series (`/blog/the-automation-brief` on the personal host,
    `/blog/forward-notes` on the agency host) and an unknown slug returned 404.
  - Each homepage contains one `href="/blog">Blog` nav link.
  - Each host's `sitemap.xml` lists its own `/blog` and five series URLs only.
- Post route: a temporary post was added locally, built and checked, then removed before commit.
  It returned 200 on the owning host, 404 on the other host, 404 for a missing slug, and appeared
  in the index, series list and sitemap. The rebuild after removal exited 0.
- Playwright (Chromium, hostnames mapped to 127.0.0.1): `/blog` on both hosts at 1440×900 and
  390×844. Document client width equalled scroll width in all four cases (no horizontal overflow).

Supporting files: `personal-blog-desktop.png`, `personal-blog-mobile.png`,
`agency-blog-desktop.png`, `agency-blog-mobile.png`.

Limitations / checks not run: Built with Node.js 22.22.0 (README specifies Node.js 24). Not deployed to Vercel; live domains not checked. No posts are
published, so every series currently shows "Coming soon". Keyboard and screen-reader checks
beyond the existing skip link were not run.

Related issue/PR: see the pull request for branch `claude/website-access-065fb2`.
