# Production verification

Verified 2026-09-26, Australia/Sydney.

- Implementation commit: https://github.com/hossainconsulting/hossainconsulting-portfolio/commit/79a0aee99b75b233e08d092e80e2efb083272e73 (GitHub API confirmed).
- Vercel production deployment dpl_4uBwupxrAPg7hsyrazLpXa47m3Ts reached READY with that exact commit.
- Cloudflare DNS table verified: apex A 76.76.21.21; www CNAME cname.vercel-dns.com; both DNS-only, Auto TTL. No other records existed or were changed.
- Public resolver 1.1.1.1 returned apex 76.76.21.21. System DNS and Google resolver still held an earlier negative response during testing, so propagation was not universal at the time of this record.
- The browser loaded https://hemayethossain.com normally with valid HTTPS and the correct new personal homepage. No DNS override or certificate bypass was applied in the browser.
- HTTPS www.hemayethossain.com returned 308 to https://hemayethossain.com/ (curl HEAD); browser navigation also arrived at that apex.
- Live hossainconsulting.com returned HTTP 200 and the agency homepage, visually reviewed at desktop and 390x844 mobile viewport. Mobile document width equalled scroll width (375px).
- Clicked agency Meet the founder -> personal homepage; clicked personal My consulting practice -> agency homepage; clicked agency Portfolio -> existing shared portfolio. All displayed the intended site.
- Browser loaded all five personal subpages /projects, /about, /skills, /resume, /privacy. Each had the intended title, H1 and canonical path; none had horizontal overflow at mobile width.
- Personal root canonical and Person JSON-LD use the personal domain and link the agency. Agency canonical uses the agency domain.
- Keyboard Tab on the personal homepage focused Skip to content.
- GitHub API returned all four referenced project/resume repository URLs successfully.
- Supporting live-http-checks.json contains 12 successful HTTPS responses and parsed sitemap destinations. Personal curl checks used --resolve with Vercel's public address because of the system DNS negative cache; normal TLS validation remained enabled. Business checks used normal system DNS. Personal browser checks used normal navigation.

Limitations: DNS caches can temporarily retain the earlier missing-domain result. Search engine indexing is not verified; Search Console is not configured. Email CTAs were checked as links; no message was sent. This is a public informational website, not an enquiry processing application. Existing résumé PDFs/DOCX remain in their separate repository.
