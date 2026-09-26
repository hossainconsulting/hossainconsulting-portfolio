# Hemayet Hossain & Hossain Consulting

One Next.js application serves two connected public websites:

- https://hemayethossain.com — personal Salesforce portfolio, background, skills and recruitment résumé overview.
- https://hossainconsulting.com — developing CRM and automation practice for trade and home-service businesses.
- Both link to the existing https://portfolio.hossainconsulting.com evidence hub, which remains a separate project.

## Content and routing

`src/lib/site.ts` reads the request Host header. The agency apex and www hostnames receive the agency homepage and navigation; other hosts receive the personal site. Metadata, canonical URLs, robots and sitemaps use fixed domain constants. No user-supplied host is interpolated into canonical URLs.

Projects clearly distinguish simulations, planning and unfinished implementation. Contact buttons open an email composer; no enquiry database or form backend is present. The résumé page links the existing public résumé repository and accepts application résumé requests by email.

## Development and verification

Use Node.js 24 and the pinned lockfile:

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run start -- --port 3100
```

Localhost shows the personal site. Test agency rendering with an HTTP request carrying `Host: hossainconsulting.com`. Check desktop and mobile navigation after UI changes. Read AGENTS.md, .cursorrules and the bundled Next.js documentation before framework changes.

## Hosting

The existing Vercel project `hossainconsulting-portfolio` deploys the GitHub main branch. Both custom domains use the same production deployment. Cloudflare remains the authoritative DNS provider. The personal apex points to Vercel; its www alias redirects to the apex through Vercel. Refer to dated evidence for actual deployment and DNS verification status.

Roll back application changes by reverting their Git commit and deploying the revert, or restoring a previously verified Vercel production deployment. DNS records do not need to change for application rollbacks. Do not replace the separate portfolio subdomain.

## Evidence

Dated checks and limitations are under `evidence/`. Search indexing, Search Console registration and inbound mail for the personal domain are not configured by this website implementation.

## AI contributor credit

**OpenAI Codex** is credited as an AI-assisted contributor (Chief of Engineer) for authorised
repository work under Hemayet Hossain's direction. This includes assistance
with documentation and repository maintenance; implementation or validation
contributions are recorded in the relevant commits and task evidence.

**Anthropic Claude Code** is also credited as an AI-assisted contributor (Chief of Staff) for
authorised repository work under Hemayet Hossain's direction, including coding,
writing and documentation. Commits it co-authored carry a
`Co-Authored-By: Claude` trailer.

Hemayet Hossain remains the project owner and decision-maker. These credits do
not represent separate GitHub accounts or collaborator invitations, and do
not change existing authorship, licensing or project completion claims.
