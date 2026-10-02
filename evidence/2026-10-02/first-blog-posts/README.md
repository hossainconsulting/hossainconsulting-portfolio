# First blog posts — 2026-10-02

## Work

Added the first post on each site in `src/lib/blog.ts`:

- hemayethossain.com — Working in Public: "Why I’m writing in public"
  (`/blog/working-in-public/why-i-am-writing-in-public`).
- hossainconsulting.com — The Automation Brief: "Every enquiry gets a reply:
  a simple follow-up setup" (`/blog/the-automation-brief/every-enquiry-gets-a-reply`).

Content check: no clients, results, statistics, quotes or testimonials are
claimed. The personal post states that portfolio work is self-directed and
built on fictional scenarios. The agency post is general guidance and points
to the free call and one-page snapshot already described on /services.

## Verification (local production build)

| Check | Result |
| --- | --- |
| `npx prettier --check src/lib/blog.ts` | Pass |
| `npm run lint` | Pass, no warnings |
| `npm run build` | Pass (15 static pages; blog routes dynamic) |
| Personal post on hemayethossain.com host | 200 |
| Agency post on hossainconsulting.com host | 200 |
| Personal post on agency host / agency post on personal host | 404 / 404 |
| Personal sitemap lists the personal post | Yes |

Screenshots (1280px, full page): `personal-post.png`, `agency-post.png`.

## Limitations

Not yet live: production deploys from `main` after PR #1 is merged. The live
domains are not reachable from this environment.
