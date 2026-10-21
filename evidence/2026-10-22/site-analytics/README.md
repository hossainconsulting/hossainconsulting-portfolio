# Personal and agency site analytics
Date: 22 October 2026, Australia/Sydney.

User requested Google Analytics and Tag Manager for personal and agency home, blog and portfolio pages.

Production inspection found no Google tags on either home page or the shared portfolio. BlogBaser already loads G-4C52TQZB08 and GTM-WMCQ993. Created personal GA4 property/stream G-HS1897RD72 and GTM-PML7PHT5 through the signed-in Google interfaces.

Changes: production-host allowlist; separate personal/agency IDs; shared layout covers all website routes; route-aware page views; no query/fragment or form values intentionally forwarded; advertising personalisation disabled. Preview and localhost hosts do not initialise tracking. Existing footers preserved. Privacy notice updated.

Validation: changed-file ESLint passed; tsc --noEmit passed; npm run build passed. Full repository lint remains blocked by four existing no-require-imports errors in evidence/2026-10-09/reddit-footer/verify.cjs. Initial build attempt using an external node_modules symlink failed; build passed after making dependencies local.

Production rollout and received-event checks pending at time of this commit. This record does not claim that scripts loading alone proves delivery to Google. Personal GTM container initially empty; Analytics is sent directly by the website, not duplicated in GTM.
