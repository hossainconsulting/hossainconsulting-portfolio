# Connected personal and business websites

Date: 2026-09-26 (Australia/Sydney)
Target: hossainconsulting/hossainconsulting-portfolio; existing Vercel project; hemayethossain.com and hossainconsulting.com.

## Changes

Replaced starter and placeholder routes with personal and agency homepages selected by domain, project evidence links, background, skills, résumé overview, privacy, canonical metadata, structured data, robots and sitemaps. Added responsive design and reciprocal navigation. Existing shared portfolio is unchanged.

## Validation before deployment

- `npm ci --no-audit --no-fund` succeeded with NODE_USE_SYSTEM_CA=1 after the first attempt hit a local certificate-chain error. Certificate checking remained enabled.
- `npm run lint`: exit 0.
- `npm run build`: exit 0, Next.js 16.3.4, TypeScript passed; all routes built.
- `npm run start -- --port 3100`: production server ready.
- PowerShell Invoke-WebRequest to /, /about, /projects, /skills, /resume, /privacy, /robots.txt and /sitemap.xml using each domain as Host: all 16 responses HTTP 200. Home titles correctly distinguish agency and personal sites.
- Browser: desktop personal homepage visually reviewed. At 390x844 mobile viewport, homepage readable with wrapped navigation; measured document clientWidth and scrollWidth both 375 (no horizontal overflow). Clicked Selected work and Résumé and verified content and destinations.
- Vercel accepted apex and www personal domain, both verified=true; www configured for 308 redirect to apex.
- Cloudflare personal zone initially had zero DNS records; apex A record 76.76.21.21 added DNS-only, Auto TTL, and verified in DNS table. This address is documented in Vercel custom-domain setup guidance.

## Pending at this commit

Production deployment, www DNS record, HTTPS, live redirects and live cross-site navigation still require verification. Follow-up evidence will record actual results.

## Limitations

No claim of Google indexing or ranking; Search Console not configured. Contact uses email composer, not a submitted web form. No client delivery claims. Existing résumé downloads are maintained in the separate résumé repository. No user credentials or private address included in this evidence.
