# Three launch prices on the agency /services page
Date/time and timezone: 2026-10-15, Australia/Sydney.
Requirement: Hemayet asked for three launch prices worked out from the standard full-package price of A$2,640 including GST: first launch client 75% off, second 50% off, third 25% off.
Environment/target: branch `claude/inbound-funnels-email-sequences-7en5ft` (on top of `main` f0e411c), local production build, Node.js v22.22.0. Not deployed.

## Calculation (GST is 10% of the ex-GST price; the standard price is A$2,400 ex GST)
| Client | Discount | Including GST | GST | Excluding GST |
|---|---|---|---|---|
| First | 75% off | A$660 | A$60 | A$600 |
| Second | 50% off | A$1,320 | A$120 | A$1,200 |
| Third | 25% off | A$1,980 | A$180 | A$1,800 |
| Standard | none | A$2,640 | A$240 | A$2,400 |
2,640 x 0.25 = 660; x 0.50 = 1,320; x 0.75 = 1,980. Every figure is a whole dollar with and without GST. The first price is exactly half the second.

## Changed (`src/app/services/page.tsx`)
- First launch client card: A$825 changed to A$660 including GST.
- Second launch client card: A$1,650 changed to A$1,320 including GST.
- Third launch client card added at A$1,980 including GST.
- "Launch pricing ends after two completed projects" changed to "after three completed projects"; the standard A$2,640 including GST applies thereafter.

## Validation actually run
- `npx eslint src/app/services/page.tsx`: exit 0. `npm run build`: exit 0.
- `next start`, `GET /services` with `Host: hossainconsulting.com`: rendered text shows three cards (01 First launch client A$660, 02 Second launch client A$1,320, 03 Third launch client A$1,980, each including GST) and "Launch pricing ends after three completed projects"; it contains no A$825, no A$1,650 and no "two completed".

## Not verified / limitations
- Server-rendered text only; no browser screenshots. Not deployed (Vercel deploys `main`, so this goes live on merge).
- The new first and second prices are lower than the live A$825 and A$1,650. Whether the A$600 ex-GST first price covers the package's hours is Hemayet's call; no hours were measured.
- Payment, cooling-off, cancellation and refund terms still await legal review.
