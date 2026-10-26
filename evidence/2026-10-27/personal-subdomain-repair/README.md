# Personal blog and portfolio subdomain repair

Date: 27 October 2026, Australia/Sydney. Hemayet asked to solve both subdomains, confirmed Claude idle and completed Vercel CLI authorization. Actions limited to the two requested public hosts and exact-host redirect rules. Existing project source main at preparation: fddd6bf09eb1924f15b81b5abeeffb049c21cf8c. No application source changed.

## Before
Public requests to blog.hemayethossain.com and portfolio.hemayethossain.com returned302 to Vercel SSO; following redirects reached a Vercel Login page with200, not public site content. Earlier user screenshots showed404; their historical cause is not proven by today's access response.

Both verified domains were assigned to separate Vercel projects hemayethossain-blog / hemayethossain-portfolio. API inspection found both projects linked to the private Brain repository and their aliased READY production deployments built from Brain commit18cf30394b169f2887d8e89601723d26d125547d with no website framework/output settings. Their latest production targets were canceled deployments. Both projects had ssoProtection deploymentType=all. This is not suitable source/project configuration for the intended public websites. No protected Brain deployment content was downloaded, published or made public.

## Applied repair
- Added two project routing rules on existing public hossainconsulting-portfolio (prj_AbdjzczgfstJpEi3cU6eZCuhmECV), each conditioned on the exact failing hostname. Blog forwards path suffixes to https://hemayethossain.com/blog/$1; portfolio forwards to https://portfolio.hossainconsulting.com/$1.
- Promoted route version21114124-2666-4ae8-824a-7501717c2f4c containing exactly two enabled routes. There were zero project routing rules before the repair.
- Reassigned only the two custom domains to the public website project using vercel domains add <host> hossainconsulting-portfolio --force. Both assignments succeeded, and subsequent project-domain API reads reported verified=true.
- Kept both Brain-linked projects' deploymentType=all protection unchanged, rechecked after the domain moves. Public website project protection remains all_except_custom_domains. No DNS/mail/nameserver records, account security settings, Git links, old deployments or other domain assignments changed. No new application deployment, merge, purchase or subscription.
- Redirects intentionally use307 to avoid long-lived browser caching while retaining the established canonical URLs. This solves access by reusing the current public blog/portfolio, not by creating two new standalone applications. Project routing rules persist separately from source deployments; their exact JSON is retained here for review.

## Actual validation
- Unauthenticated curl.exe -I --max-redirs0 returned307 from both repaired hosts. Blog Location=https://hemayethossain.com/blog/; portfolio Location=https://portfolio.hossainconsulting.com/.
- Unauthenticated Invoke-WebRequest GET followed each root redirect to200 with expected Blog / portfolio page titles; no login page. Blog's trailing slash is normalized by the existing application.
- Blog query source=subdomain-check survived to /blog?source=subdomain-check, final200. Portfolio /privacy?source=subdomain-check survived to the matching canonical privacy path/query, final200. These prove the exercised path/query cases, not every possible deep link.
- Original personal, agency and shared portfolio homepages still200 with their expected titles. No change to existing service copy.
- Read live routing API: two enabled routes, staged=false. Read domains API: both verified on public project. Re-read both old project protection fields: still all.
- Supporting public-checks.json records the follow-up GET checks. domain-verification.json and live-routes.json record sanitized provider configuration; blog-route.json and portfolio-route.json are exact submitted route bodies. No raw login/auth/creator data, cookies, tokens, user identifiers, secrets or private Brain contents included.
- Vercel MCP tools were unavailable. Initial npx failed certificate validation; retried with process-only NODE_USE_SYSTEM_CA=1, keeping TLS verification enabled. CLI65.2.0 sign-in completed by Hemayet. No CLI/auth file committed.
- Git whitespace check and evidence review before commit. No build/lint needed: no application source changed. No new rendered-browser/mobile/console, form, booking, chat or payment test; HTTP/configuration checks only. Paid-client readiness gaps from earlier reviews are not closed by this repair.

## Recovery reference and follow-up
Prior domain projects: blog→prj_AOANuOJwdHBmKOLrRDdATwl7XKVq; portfolio→prj_pH7dhfOIgacyESYHH6LJY3cRxRzn. Restoring those assignments would restore protected/broken public access, so do not do so automatically. If rollback is authorized, preserve all protection and review domain assignments and project routing version together. Do not remove current rules while leaving aliases expecting those rules.

The two old Brain-linked projects remain protected and otherwise unchanged. If future standalone blog/portfolio applications are wanted, configure them from an appropriate public-safe website source and review the deployment artifact before public access. Disconnecting/deleting those projects or changing their Git/protection configuration is separate work.

Evidence committed/pushed on codex/personal-subdomain-repair-20261027; remote SHA verified and draft PR linked in chat. This evidence PR documents already-applied provider routing changes; merging it does not deploy or enable the repair.
