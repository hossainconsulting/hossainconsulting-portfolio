# Device and browser support

Prepared 2 October 2026. Applies to hemayethossain.com and hossainconsulting.com.

## Target coverage

Design for current Chrome, Edge, Safari and Firefox, including Android and iOS browser contexts. Use responsive layouts rather than separate device-specific sites. Internet Explorer is retired and is not a supported target for this Next.js application. Browser compatibility does not establish search indexing, and Microsoft Advertising is a separate paid service. Ubersuggest is an SEO research product rather than a browser.

Support direct URLs and links from email/social apps. Verify the same canonical page, meaningful content, navigation, email links and Calendly booking entrypoint regardless of referrer. Mailto links rely on the visitor's configured email application. Calendly and meeting providers control their own external interfaces; website checks do not certify those providers' device support.

## Implemented review-branch changes

- Navigation wraps at tablet/laptop intermediate widths instead of relying on a single row.
- Tablet cards/steps use two columns and contact sections stack; phone layouts retain one column.
- Selected navigation, footer and contact text links have at least 44 pixels of vertical touch area.
- Narrow headings/buttons wrap safely, long email/resource links can break, and grid content can shrink without hiding overflow.
- Tablet credential/profile text remains readable without splitting ordinary words.
- Article figures have no extra horizontal margin; media stays within its container.
- Existing viewport metadata, keyboard focus, skip link and reduced-motion behavior are retained.

## Actual browser verification

Agent-browser 0.38.2 with Chrome headless shell 154.0.8037.92, Linux. Eight viewport sizes for each live homepage: 320×740, 375×812, 390×844, 768×1024, 820×1180, 1024×768, 1366×768 and 1920×1080.

The proposed stylesheet was injected into each live homepage in a browser, then checked against the baseline. These are live-markup/proposed-CSS tests, not a deployed PR preview or production deployment of the changes. All 16 checks found no horizontal overflow and zero checked links below 44 pixels tall after injection. The Calendly link was present in every case. Baseline pages already had no horizontal overflow; the measured improvement was touch-target sizing. Screenshots were reviewed at phone and tablet sizes; awkward tablet credential/profile wrapping was corrected and the matrix rerun.

CSS injection does not verify new article markup, hydration, redirects, social in-app webviews, email-client previews or booking completion. No form submission, booking or email was sent. Chromium viewport emulation is not a physical Android or iPhone test and does not establish Safari/Firefox/Edge release testing.

## Before production publication

1. Complete a full production build and review the actual PR preview. Local Turbopack build still fails when a subprocess tries to bind a port in this environment.
2. Check home, services/résumé, blog/article, privacy and terms pages in current Chrome, Edge, Safari and Firefox where available.
3. Check an actual iPhone/iPad Safari session and Android Chrome session, including portrait/landscape, text zoom, keyboard navigation, focus, image loading and email/Calendly handoff.
4. Open shared URLs from a social in-app browser and an email application. Check preview metadata, navigation and return paths.
5. Record browser versions, screen size, URLs, results and exceptions. Do not claim every browser/device is covered from one engine's viewport tests.

## Repeating the layout check

Use agent-browser to open a target page, set each viewport, take a screenshot and evaluate document scroll width against innerWidth. Inspect bounding rectangles of navigation/footer/contact links and confirm the booking destination. For a CSS-only diagnostic, insert the reviewed stylesheet into a style element; clearly label that method. Close the browser afterward. Provider sign-in and any actual booking require separate owner/customer action.
