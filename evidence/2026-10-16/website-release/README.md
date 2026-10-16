# Approved coordinated website release — 16 October 2026

Hemayet explicitly approved merging and deploying PR #23 and companion portfolio PR #32 together, followed by live verification. Claude had released both repositories in its handover; its work and unrelated Brain files were untouched.

## Release

- Merged [website PR #23](https://github.com/hossainconsulting/hossainconsulting-portfolio/pull/23), reviewed head d1e5c038250b0ea3c3293c44b7f29f8c28881b8b, at [dcee8c72fd493536b04ae65a68cbba58bf4841ee](https://github.com/hossainconsulting/hossainconsulting-portfolio/commit/dcee8c72fd493536b04ae65a68cbba58bf4841ee), 16 October 11:39:48 UTC / 22:39:48 AEDT.
- Established Vercel Git integration deployed that main commit to both hemayethossain.com and hossainconsulting.com. GitHub production deployment 7118025015 reported success at 11:40:13 UTC. Vercel deployment: https://vercel.com/hossain-consulting/hossainconsulting-portfolio/F1v6zUC7gqv3L8XMyQzSNVJZ4sZk ; deployment URL: https://hossainconsulting-portfolio-2rzirhkt8-hossain-consulting.vercel.app . Commit status also reported success.
- Portfolio PR #32 was merged and deployed first, then its SunRise anchor and notices were checked live before merging this shared-site PR. This was a coordinated sequential release across two providers, not an atomic transaction.
- Prior production source was 19bbf355a42a385dd768dc08cc8af83200ca176b. No DNS, email, booking, payment or account settings changed. Cloudflare's expired deployment login was renewed by Hemayet through its normal browser authorization before any merge.

## Actual verification

`live-http-checks.json` records 18 public HTTPS responses across all three domains and the agency www alias, with UTC timestamps and content hashes. All returned 200 and passed content assertions. Shared-site checks covered personal root/about/projects/résumé/privacy/legal/career article and agency root/services/privacy/legal/free-call article. Confirmed the SunRise cross-site link, résumé-on-request wording, revised privacy statement, removal of the free-summary promise, and preserved prices/legal-review gate. No checked anchors expose the private SunRise or résumé repository URLs.

Portfolio root/links/privacy/terms matched the approved visible text, links and metadata (ignoring whitespace); the social preview PNG matched the approved file byte-for-byte. Cloudflare adds infrastructure scripts, so raw HTML byte identity is not asserted. The first overstrict whole-file check was corrected to account for observed edge scripts and CRLF/LF representation; final semantic assertions passed.

`live-browser-checks.json` records six isolated Edge visits: 390x844 and 1280x844 for each homepage. All returned 200, with document width equal to viewport. Portfolio chat was closed initially and opened/closed successfully without sending messages. Safe viewport screenshots for these two sites are included; mobile views were visually reviewed. No browser login, customer content or private workspace was captured.

Premerge build/source-lint checks remain documented in the earlier website-conflicts evidence. Existing whole-repository lint errors in a historical evidence script were not changed. Live checks establish this release's content/routing, not email delivery, booking completion, payment availability, legal approval, credential authenticity or lead/model delivery. Those actions were not exercised.

This evidence-only branch does not change application source and has not been merged or deployed. Evidence was reviewed for secrets and unrelated personal/customer data before upload.
