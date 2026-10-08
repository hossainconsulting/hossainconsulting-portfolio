# Footer verification — 8 October 2026

Both production homepage footer elements were fetched and parsed, and compared with current main src/lib/site.ts. Agency has seven social links: Facebook, Instagram, X, LinkedIn, YouTube, TikTok, Pinterest. Personal has those seven plus Trailblazer. Both include homepage, cross-domain link, GitHub, email, privacy and legal. All match current source; no footer changes were made.

All 15 social destinations checked with curl -L --max-time 18. Thirteen returned HTTP 200. Both LinkedIn links returned HTTP 999, preventing automated profile verification; this is not proof of a broken link. A 200 social response alone does not prove active account status or posting permissions. X page titles identified Hossain Consulting (@HossainConsult) and Hemayet Hossain (@hemayetAI); YouTube titles identified Hossain Consulting and Hemayet Hossain. No searched suspended/nonexistent status strings found, which is not conclusive account verification. Facebook redirected to matching named people/profile URLs. Pinterest agency search retrieval showed hossainconsulting and an agency website link, but retrieved content was previously crawled, so its profile details are not asserted current.

Owner rule: never remove the footers from either domain. Social URLs are already available; do not ask the owner to resend them. Authentication and permission to publish remain separate from public profile links. No social posts, login, main merge or website deployment performed in this verification. This evidence-only branch may receive an automatic Vercel preview; no production release is authorized by the check.

## HTTP observations

```json
[
  {
    "url": "https://www.facebook.com/profile.php?id=61554142802965",
    "result": "200 https://www.facebook.com/people/Hossain-Consulting/61554142802965/",
    "exit": 0
  },
  {
    "url": "https://www.instagram.com/hossainconsulting/",
    "result": "200 https://www.instagram.com/hossainconsulting/",
    "exit": 0
  },
  {
    "url": "https://x.com/HossainConsult",
    "result": "200 https://x.com/HossainConsult",
    "exit": 0
  },
  {
    "url": "https://www.linkedin.com/company/hossain-consulting",
    "result": "999 https://www.linkedin.com/company/hossain-consulting",
    "exit": 0
  },
  {
    "url": "https://www.youtube.com/@hossain-consulting",
    "result": "200 https://www.youtube.com/@hossain-consulting",
    "exit": 0
  },
  {
    "url": "https://www.tiktok.com/@hossainconsulting",
    "result": "200 https://www.tiktok.com/@hossainconsulting",
    "exit": 0
  },
  {
    "url": "https://au.pinterest.com/hossainconsulting/",
    "result": "200 https://au.pinterest.com/hossainconsulting/",
    "exit": 0
  },
  {
    "url": "https://www.facebook.com/profile.php?id=61553978682903",
    "result": "200 https://www.facebook.com/people/Hemayet-Hossain/61553978682903/",
    "exit": 0
  },
  {
    "url": "https://www.instagram.com/sirhemayethossain/",
    "result": "200 https://www.instagram.com/sirhemayethossain/",
    "exit": 0
  },
  {
    "url": "https://x.com/hemayetAI",
    "result": "200 https://x.com/hemayetAI",
    "exit": 0
  },
  {
    "url": "https://www.tiktok.com/@sirhemayethossain",
    "result": "200 https://www.tiktok.com/@sirhemayethossain",
    "exit": 0
  },
  {
    "url": "https://www.youtube.com/@sirhemayethossain",
    "result": "200 https://www.youtube.com/@sirhemayethossain",
    "exit": 0
  },
  {
    "url": "https://au.pinterest.com/hemayethossain/",
    "result": "200 https://au.pinterest.com/hemayethossain/",
    "exit": 0
  },
  {
    "url": "https://www.linkedin.com/in/hemayethossain/",
    "result": "999 https://www.linkedin.com/in/hemayethossain/",
    "exit": 0
  },
  {
    "url": "https://www.salesforce.com/trailblazer/hemayethossain",
    "result": "200 https://www.salesforce.com/trailblazer/hemayethossain?bc=OTH",
    "exit": 0
  }
]

```
