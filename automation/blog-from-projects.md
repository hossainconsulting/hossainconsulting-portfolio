# Blog posts from completed projects

A daily Claude Code routine follows this runbook. It drafts blog posts for
finished project work and opens a **draft pull request**. Nothing is published
until Hemayet reviews and merges the PR (Vercel then deploys `main`).

## Marking work as complete

In the project repository, tag the commit that completes the work and push the tag:

```sh
git tag blog/phase-1            # any name after blog/
git push origin blog/phase-1
```

Optionally give it a message as context for the post:
`git tag -a blog/phase-1 -m "Phase 1: data model and security"`.

Watched repositories are listed in `automation/blog-projects.json`. Add a repo
there to include it. Only list public repositories: posts are public.

## What the routine does

1. Clone this repository's `main`. If `src/lib/blog.ts` or
   `scripts/blog-candidates.mjs` is missing, stop and report that the blog
   has not been merged yet.
2. Run `node scripts/blog-candidates.mjs`. If `candidates` is empty, stop
   without creating a branch, commit or PR. Report any `errors` entries.
3. For each candidate (one PR per candidate):
   1. Clone the project repo and check out the tag. Read the README, the tag
      message (`git tag -n99 <tag>`), `deliverables/` (including
      `build-log.md`), `evidence/` and the commits since the previous `blog/`
      tag (or the last 30 commits if it is the first).
   2. Write **two posts** in `src/lib/blog.ts`, appended to `posts`:
      - **Personal** (hemayethossain.com): series `hemayet-builds` for a full
        project or milestone write-up, or `the-build-log` for a smaller
        update. Technical and first person: what was built, the key decisions,
        how it was verified and what was learned.
      - **Agency** (hossainconsulting.com): series `field-notes` (or
        `crm-that-works` when the work is mainly CRM design). Written for a
        trade or home-service business owner: the problem, the workflow
        approach, what to watch for. No jargon.
      - Both posts carry `source: { repo: "<repo>", tag: "<tag>" }` and today's
        date (Australia/Sydney). Slugs are lowercase, hyphenated, unique.
      - 4–8 body paragraphs each; a one-sentence summary; a plain title.
   3. Validate: `npm ci`, `npm run lint`, `npm run build`, and confirm
      `node scripts/blog-candidates.mjs` no longer lists the candidate.
   4. Save evidence in `evidence/<YYYY-MM-DD>/blog-<repo>-<tag-name>/README.md`
      per `EVIDENCE.md`: source repo, tag and SHA, files read, validation
      commands and results.
   5. Commit on a new branch `blog/<repo>-<tag-name>` (`/` in the tag name
      replaced by `-`), push it, and open a **draft** PR titled
      `Blog: <project> — <tag>`. The PR body lists both post titles, links the
      source tag, and states the claims a reviewer should check.
      If no GitHub PR tool is available in the session, push the branch and
      report `https://github.com/hossainconsulting/hossainconsulting-portfolio/compare/main...<branch>?expand=1`
      so Hemayet can open the draft PR in one click.

## Content rules (non-negotiable)

- **Only state what the repository shows.** Every claim must trace to the
  README, build log, evidence or commits at the tag. If something is
  planned, say planned.
- **Projects are simulations.** Name them as self-directed or fictional
  scenarios. Never imply a real client, engagement, revenue or measured
  result. Scenario metrics are fictional inputs, not outcomes.
- No invented numbers, quotes, testimonials or screenshots.
- No secrets, tokens, org IDs, usernames, email addresses or personal data
  from the source repo.
- Australian English. Match the sites' plain, direct tone.
- If the repo lacks enough material for an honest post, open the PR with a
  short post that says what was completed, and flag the gap in the PR body.
- Never push to `main`, merge, deploy or enable auto-merge.
