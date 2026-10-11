import type { BlogSite } from "@/lib/blog";
import { PERSONAL, PERSONAL_SOCIAL } from "@/lib/site";

// The existing blog credits Hemayet on both sites. Keep one identity and adapt
// the biography to the audience; this does not assign authors to new posts.
export const BLOG_AUTHOR = {
  name: "Hemayet Hossain",
  byline: "Founder of Hossain Consulting | Salesforce & AI Automation",
  url: `${PERSONAL}/about`,
  sameAs: PERSONAL_SOCIAL.filter((profile) =>
    ["LinkedIn", "Trailblazer"].includes(profile.label),
  ).map((profile) => profile.href),
  bios: {
    personal:
      "Hemayet Hossain is based in Sydney and is the founder of Hossain Consulting. He writes about Salesforce, AI and workflow automation, sharing lessons from self-directed projects and software prototypes. His articles distinguish tested results from ideas still being explored.",
    agency:
      "Hemayet Hossain is the Sydney-based founder of Hossain Consulting, a developing CRM and automation practice for trade and home-service businesses. He writes about Salesforce, AI and workflow automation using self-directed demos and practice scenarios, distinguishing tested results from ideas still being explored.",
  } satisfies Record<BlogSite, string>,
} as const;
