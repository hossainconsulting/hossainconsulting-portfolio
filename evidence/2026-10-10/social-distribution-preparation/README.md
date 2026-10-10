# Social distribution preparation

Prepared 10 October 2026 (Australia/Sydney). This is an approval pack and
validation record only. No post was published or scheduled, no message was
sent, and no public website was changed.

## Objective

Turn the existing 2 October personal and agency content into a small,
reviewable organic distribution batch. Reuse approved-source material rather
than duplicate the Monday project-evidence and blog-drafting task.

## Source state checked

- Base: `main` at `831924a843e4cf4a776d428d96cd020fba0cac9b`
  (`Merge pull request #14 from hossainconsulting/docs/free-listing-review-20261009`).
- PR #11, skill update: merged 8 October 2026.
- PR #12, organic roadmap: merged 8 October 2026.
- PR #13, internal/cross-site links: merged 8 October 2026.
- PR #14, free-listing and profile-consistency review: merged 9 October 2026.
- Content source: `docs/brand-growth/social-and-video-pack.md`, prepared
  2 October 2026.
- Claim sources: the matching published entries in `src/lib/blog.ts`.
- Monday task: the existing `Prepare blogs and social packs` task remains
  enabled for Monday. It has not run yet. Nothing from a future Monday output
  is enrolled in this batch automatically.

## Proposed approval batch

The times below are starting hypotheses, not evidence-backed best times. They
separate the posts across days and keep each audience pointed to its matching
website. Schedule only after the owner approves the exact copy, account and
time.

| Proposed time (Sydney) | Account | Format | Destination | State |
| --- | --- | --- | --- | --- |
| Tue 13 Oct, 8:30 am | Hemayet Hossain LinkedIn | Text + link | Personal article | Ready for owner review; no share image |
| Wed 14 Oct, 11:30 am | Hossain Consulting LinkedIn Page | Text + link preview | Agency article | Ready for owner review |
| Sat 17 Oct, 9:30 am | Hossain Consulting Facebook Page | Text + link preview | Agency article | Ready for owner review |

### Personal LinkedIn — exact proposed copy

> I'm building from Salesforce administration towards forward deployed
> engineering. My immediate goal is a Salesforce Administrator or CRM support
> opportunity. My portfolio contains simulated and self-directed projects,
> with the status and AI assistance described openly. The habit I want to build
> is simple: understand the problem, show the work, check it and document the
> limits.
>
> Read:
> https://hemayethossain.com/blog/forward-notes/salesforce-to-forward-deployed-engineer?utm_source=linkedin&utm_medium=organic-social&utm_campaign=2026-10-forward-notes

Target account:
`https://www.linkedin.com/in/hemayethossain`

### Agency LinkedIn — exact proposed copy

> A quote follow-up workflow starts with ownership. Keep one quote register,
> agree the next contact, and stop when the customer books, declines or opts
> out. Automation should help you keep that promise. Our new guide explains
> the process and its limits; it is a suggested workflow, not a client-results
> claim.
>
> Read:
> https://hossainconsulting.com/blog/crm-that-works/quote-follow-up-workflow-for-tradies?utm_source=linkedin&utm_medium=organic-social&utm_campaign=2026-10-quote-follow-up

Target account:
`https://www.linkedin.com/company/hossain-consulting`

### Agency Facebook — exact proposed copy

> A quote follow-up workflow starts with ownership. Keep one quote register,
> agree the next contact, and stop when the customer books, declines or opts
> out. Automation should help you keep that promise. Our new guide explains
> the process and its limits; it is a suggested workflow, not a client-results
> claim.
>
> Read:
> https://hossainconsulting.com/blog/crm-that-works/quote-follow-up-workflow-for-tradies?utm_source=facebook&utm_medium=organic-social&utm_campaign=2026-10-quote-follow-up

Target account:
`https://www.facebook.com/profile.php?id=61554142802965`

## Asset and channel readiness

| Item | Evidence | Decision |
| --- | --- | --- |
| Agency link preview | Live page exposes `/images/quote-follow-up-workflow.webp` as a 1536×1024 Open Graph image; the image returns HTTP 200 | Ready for owner review on LinkedIn and Facebook |
| Personal link preview | Live page has title, description and canonical metadata but no Open Graph image | Use text + link for this batch; create a platform-native visual in a separate Wednesday task |
| Six-slide agency carousel | Slide outline exists, but no six-slide asset has been rendered | Hold; do not schedule |
| Personal and agency short videos | Scripts exist, but no video files have been rendered | Hold; do not upload or schedule |
| Pinterest | Caption exists, but no vertical pin asset has been reviewed | Hold |
| Instagram, TikTok, X and Reddit | No platform-specific item in this bounded batch | Hold; do not mirror automatically |

Public profile links identify intended destinations but do not prove that an
authenticated session or publishing permission is available.

## Platform constraints checked 10 October 2026

- LinkedIn documents native scheduling for both member posts and Page posts.
  Page scheduling requires super-admin or content-admin access, which was not
  tested here.
- YouTube documents scheduled publishing after a video file is uploaded and
  set to scheduled/private. There is no rendered file in this pack.
- YouTube states that URLs in Shorts descriptions and Shorts comments are not
  clickable. When Shorts are eventually prepared, use visible brand naming,
  channel-profile links and an eligible related-video link instead of treating
  the description URL as a click-through path.
- Meta's public Business Help pages were reachable only as limited public
  shells during this check. Treat Facebook scheduling access as unverified
  until the owner opens the Page in Meta Business Suite.

References:

- LinkedIn Help, [Schedule a LinkedIn Page post](https://www.linkedin.com/help/linkedin/answer/a1427297)
- LinkedIn Help, [Post and share updates](https://www.linkedin.com/help/linkedin/answer/a527227)
- YouTube Help, [Schedule video publish time](https://support.google.com/youtube/answer/1270709)
- YouTube Help, [Sharing links with your audiences](https://support.google.com/youtube/answer/13748639)

## Live destination validation

Checked with redirect-following HTTP requests on 10 October 2026:

| URL | Result | Metadata check |
| --- | --- | --- |
| Personal article with LinkedIn campaign query | HTTP 200, `text/html` | Canonical removes campaign query and points to the personal article |
| Agency article with LinkedIn campaign query | HTTP 200, `text/html` | Canonical removes campaign query and points to the agency article |
| Agency article with Facebook campaign query | HTTP 200, `text/html` | Same agency article destination |
| Agency Open Graph image | HTTP 200, `image/webp` | 1536×1024 declared in live metadata |

The campaign queries contain only channel and campaign labels; they contain no
personal or sensitive identifiers.

## Session checklist

- [x] Verify current `main` and the actual PR #11–#14 states.
- [x] Reuse the existing content pack; do not duplicate Monday's task.
- [x] Check claims against repository article sources.
- [x] Check campaign destinations, canonicals and the agency image live.
- [x] Separate review-ready text/link posts from unrendered assets.
- [x] Keep paid ads, boosts, purchased backlinks, pixels, retargeting and
  unsolicited outreach inactive.
- [x] Preserve every footer and footer link; no application source was edited.
- [ ] Owner reviews exact copy, accounts and proposed times.
- [ ] After explicit approval, owner or an authenticated operator schedules
  only the approved items in the platforms' native tools.

## Measurement after an approved publication

Record platform-native impressions, reactions, comments, saves, shares and
link clicks after seven days. Compare personal and agency results separately.
Do not infer traffic or conversions that the available evidence does not show.
No analytics pixel or retargeting audience is proposed.

## Blockers and next step

- Scheduling/publishing is blocked pending exact owner approval and verified
  authenticated Page/profile access.
- Video distribution is blocked until the two scripts are rendered, captioned
  and reviewed.
- The personal article has no social share image; this is not a publishing
  defect, but it limits visual presentation for a link-preview post.

Next step: owner reviews the three-item batch. If approved, schedule only those
items natively; then use the next Wednesday asset session to produce the
personal visual and the agency carousel/video assets without altering either
website or any footer.
