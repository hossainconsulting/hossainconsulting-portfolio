// Blog content for both sites. Each site's /blog lists its own series;
// /blog/[series] and /blog/[series]/[post] only resolve on the owning site.
//
// To add a series: append an entry to `series` with a unique slug.
// To publish a post: append an entry to `posts` naming an existing series.
// Posts are plain paragraphs; no CMS or database is involved.
// Project-completion posts are drafted automatically: see
// automation/blog-from-projects.md.

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
  // Set by the project-completion automation; used to avoid duplicate posts.
  source?: { repo: string; tag: string };
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

export const posts: Post[] = [
  {
    series: "working-in-public",
    slug: "why-i-am-writing-in-public",
    title: "Why I’m writing in public",
    date: "2026-10-02",
    summary:
      "What this blog is for, what you’ll find here, and the rules I’m holding myself to.",
    body: [
      "I’m looking for my first Salesforce Administrator or CRM support role. A résumé can list skills, but it can’t show how someone thinks through a problem. Writing can.",
      "So this blog is where I’ll explain what I build and why. Most of my portfolio work so far is self-directed: practice projects built on fictional business scenarios. I’ll always say so. Where a project uses scenario numbers, they are inputs I was given, not results I achieved.",
      "You’ll find five series here. Forward Notes covers where I’m heading and what I’m studying. Hemayet Builds walks through finished projects. The Build Log has short, dated updates. Notes from the Org is about everyday admin practice. Working in Public, this series, is for reflections on learning in the open.",
      "A few rules I’m holding myself to. I’ll only describe work that exists in a repository you can check. If something is planned, I’ll call it planned. If something didn’t work, I’ll say that too, because the fix is usually the most useful part.",
      "If you’re a recruiter or hiring manager, the posts are meant to save you time: you can see how I approach a problem before we ever talk. If you have questions, the résumé page explains how hiring me works, step by step.",
    ],
  },
  {
    series: "the-automation-brief",
    slug: "every-enquiry-gets-a-reply",
    title: "Every enquiry gets a reply: a simple follow-up setup",
    date: "2026-10-02",
    summary:
      "A plain starting point for trade and home-service businesses that lose track of enquiries across phone, text, email and web forms.",
    body: [
      "Most small service businesses don’t lose work because they’re bad at the job. They lose it because an enquiry came in on a busy day and nobody got back to the customer.",
      "Enquiries arrive in too many places: a missed call, a text to the owner’s mobile, an email, a web form, a message on social media. Each one is easy to answer. Keeping track of all of them, every day, is the hard part.",
      "The fix doesn’t start with software. It starts with three questions. Where do enquiries come in? Who is responsible for the first reply? How soon should that reply happen? Write the answers down. That alone often shows where things slip.",
      "Next, give every enquiry one home. That might be a CRM, a job-management app or, to begin with, a shared spreadsheet. The tool matters less than the rule: if it isn’t written down there, it doesn’t exist.",
      "Then add a few simple stages, such as new enquiry, quote sent, booked and lost. Keep it short. If your team can’t remember the stages, there are too many.",
      "Only now is automation worth adding. A reminder when an enquiry has had no reply by the end of the day. A nudge when a quote has gone quiet for a few days. Small, boring automations like these are often the most useful ones.",
      "What to watch for: don’t automate a messy process, or you’ll just make the mess faster. And keep a person in charge of anything a customer sees.",
      "If you’d like a second pair of eyes on how enquiries move through your business, a free 20-minute call is a good place to start. You’ll get a one-page summary afterwards, whether or not we work together.",
    ],
  },
];

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
