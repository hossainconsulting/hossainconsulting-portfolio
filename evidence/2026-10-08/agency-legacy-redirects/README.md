# Step 1 verification and redirect review — 8 October 2026

## Google live tests

| Agency URL | Live test time shown | Fetch | Crawl allowed | Indexing allowed | Declared canonical |
| --- | --- | --- | --- | --- | --- |
| /services | Oct 8, 2026 2:44:05 PM | Successful | Yes | Yes | https://hossainconsulting.com/services |
| /blog | Oct 8, 2026 2:46:29 PM | Successful | Yes | Yes | https://hossainconsulting.com/blog |

Both show “URL is available to Google” and “Page can be indexed”. Google-selected canonical is only determined after indexing. Stored index results still show historical June 17 and May 18 404 crawls respectively. No current sitemap routing defect demonstrated.

A Request indexing attempt for /blog returned “Oops! Something went wrong” / “We had a problem submitting your indexing request. Please try again later.” Submission was not confirmed. No request was attempted for /services during this follow-up. No Validate Fix action or sitemap deletion performed.

## Prepared local change

Applied the previously reviewable proposal to next.config.ts locally:
- agency /home → /, permanent 308
- agency /terms-of-service → /legal, permanent 308
- agency /contact → /#contact, permanent 308

Host condition limits these redirects to hossainconsulting.com and www.hossainconsulting.com. Personal and portfolio hosts are excluded. No blog, sitemap, canonical, robots, cross-link or current page source changes. /page-8 has no demonstrated equivalent and remains excluded from this proposal.

## Validation

npm run lint: passed, exit 0.
npm run build: passed, exit 0; compilation, TypeScript and page generation successful.
node scripts/check-blog-search.mjs: passed metadata, sitemap ownership, cross-site rejection and unknown-host origin checks.
Production server runtime: all 15 combinations of three legacy paths and five hosts behaved as expected (agency apex/www 308 to exact destinations; other hosts 404). Seven existing agency routes returned 200: /, /services, /blog, /legal, /privacy, /sitemap.xml, /robots.txt. Evidence: legacy-redirect-runtime-checks.json.

No merge, deployment, public website change, DNS change or push performed. Approval required before publishing the prepared changes. Evidence remains local because repository pushes may trigger deployment; it has not been uploaded to GitHub.

Legacy sitemap submissions and old blog/supplier hosting remain a separate retirement decision. Do not remove submissions, disable subdomains, or redirect historical articles without confirming content replacements and owner approval.

## Approval and publication follow-up
Owner approved the recommended three redirects on 8 October 2026. This record is now uploaded on the review branch. Publication and live verification results will be recorded separately; earlier local-only statements describe the prior stage.
