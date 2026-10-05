# Responsive device support

Date: 2 October 2026, UTC. Baseline: bad0f46b4461d6fddec95ed4dee74f764d5a6ef4 on PR #6 review branch. Target: both websites' shared stylesheet.

Changes: tablet navigation wrapping, tablet card/contact layouts, 44px vertical link targets, safe heading/button/email wrapping, shrinkable grid columns and article media containment. Visual review found tablet credential/profile word splitting; corrected ordinary-word wrapping and adjusted tablet arrangement before rerunning the matrix.

Browser verification: agent-browser 0.38.2, Chrome headless shell 154.0.8037.92. Eight widths per homepage from 320 to 1920 (16 cases). Live page markup plus injected proposed CSS, not a deployed preview. viewport-results.json records before/after measurements. All cases: no horizontal overflow after injection, zero selected targets below 44px high, Calendly link present. Baseline selected targets below 44px: 20 personal, 18 agency. Browser screenshots locally reviewed at 320 and 768; source PNGs remain in the execution workspace and are not uploaded in this commit. No private account screens captured.

Checks: npm run lint, direct TypeScript noEmit, scripts/check-blog-search.mjs and git diff --check passed. npm run build failed because a Turbopack CSS subprocess could not bind a port (Operation not permitted). Initial dependency symlink build failure was resolved by installing the pinned dependencies in this clone; subsequent build failure is the port restriction.

Browser setup: standard CLI installer failed with proxy CA trust; Chrome headless shell was downloaded through the configured HTTPS trust. agent-browser used a /tmp socket directory, the configured proxy CA, and container-compatible Chrome launch arguments. TLS verification retained. No user accounts/authenticated sessions used.

Limitations: Safari, Firefox, physical iOS/Android, Edge-specific behavior, social in-app webviews, email applications, zoom/landscape, inner routes and actual booking completion have not been browser-verified in this run. The injected CSS run is a diagnostic for existing live markup. Full build and actual preview checks remain required before main merge. No production deployment performed.

Supporting files: viewport-results.json; docs/brand-growth/device-browser-support.md; changed src/app/globals.css. Existing privacy and consent restrictions preserved.
