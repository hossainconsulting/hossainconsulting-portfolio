// Blog content for both sites. Each site's /blog lists its own series;
// /blog/[series] and /blog/[series]/[post] only resolve on the owning site.
//
// To add a series: append an entry to `series` with a unique slug.
// To publish a post: append an entry to `posts` naming an existing series.
// Posts are plain paragraphs; no CMS or database is involved.

export type BlogSite = "personal" | "agency";

export type Series = {
  site: BlogSite;
  slug: string;
  name: string;
  description: string;
};

export type Post = {
  series: string;
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  body: string[];
};

export const series: Series[] = [
  // hemayethossain.com
  {
    site: "personal",
    slug: "forward-notes",
    name: "Forward Notes",
    description:
      "Where I’m heading and what I’m learning on the way: career direction, certifications and the move into Salesforce and AI work.",
  },
  {
    site: "personal",
    slug: "hemayet-builds",
    name: "Hemayet Builds",
    description:
      "Walkthroughs of things I’ve built — Salesforce configuration, automations and AI experiments — with the decisions behind them.",
  },
  {
    site: "personal",
    slug: "the-build-log",
    name: "The Build Log",
    description:
      "Short, dated progress updates from active projects: what changed, what broke and what comes next.",
  },
  {
    site: "personal",
    slug: "notes-from-the-org",
    name: "Notes from the Org",
    description:
      "Salesforce administration practice: access, data quality, Flow and the small details that keep an org healthy.",
  },
  {
    site: "personal",
    slug: "working-in-public",
    name: "Working in Public",
    description:
      "Reflections on learning in the open, moving from operations into technology, and what has and hasn’t worked.",
  },
  // hossainconsulting.com
  {
    site: "agency",
    slug: "the-automation-brief",
    name: "The Automation Brief",
    description:
      "Short, practical automation ideas for trade and home-service businesses. One workflow at a time.",
  },
  {
    site: "agency",
    slug: "field-notes",
    name: "Field Notes",
    description:
      "Lessons from demos and practice scenarios: how a workflow looked before, what changed and what to watch for.",
  },
  {
    site: "agency",
    slug: "practical-ai-for-business",
    name: "Practical AI for Business",
    description:
      "Plain-English guides to using AI in a small business — with the limits documented and a person kept in control.",
  },
  {
    site: "agency",
    slug: "crm-that-works",
    name: "CRM That Works",
    description:
      "Fitting a CRM to the way your team actually works: enquiries, follow-up, ownership and handovers.",
  },
  {
    site: "agency",
    slug: "hossain-insights",
    name: "Hossain Insights",
    description:
      "Practice updates and longer perspective pieces on CRM, automation and running a small service business.",
  },
];

export const posts: Post[] = [];

export const siteKey = (agency: boolean): BlogSite =>
  agency ? "agency" : "personal";

export function seriesFor(site: BlogSite) {
  return series.filter((s) => s.site === site);
}

export function findSeries(site: BlogSite, slug: string) {
  return series.find((s) => s.site === site && s.slug === slug);
}

export function postsIn(seriesSlug: string) {
  return posts
    .filter((p) => p.series === seriesSlug)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function latestPosts(site: BlogSite) {
  const slugs = new Set(seriesFor(site).map((s) => s.slug));
  return posts
    .filter((p) => slugs.has(p.series))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function findPost(site: BlogSite, seriesSlug: string, slug: string) {
  if (!findSeries(site, seriesSlug)) return undefined;
  return posts.find((p) => p.series === seriesSlug && p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const blogIntro = {
  personal: {
    title: "Writing",
    em: "in the open.",
    intro:
      "Notes on Salesforce, automation, AI and the path into technology. Five series to start, with more added as the writing grows.",
    metaTitle: "Blog | Hemayet Hossain",
    metaDescription:
      "Hemayet Hossain’s blog on Salesforce administration, automation, AI and learning in public.",
  },
  agency: {
    title: "Ideas for",
    em: "less admin.",
    intro:
      "Practical writing on CRM, automation and AI for trade and home-service businesses. Five series to start, with more added as the practice grows.",
    metaTitle: "Blog | Hossain Consulting",
    metaDescription:
      "Hossain Consulting’s blog: practical CRM, automation and AI ideas for trade and home-service businesses.",
  },
} as const;
