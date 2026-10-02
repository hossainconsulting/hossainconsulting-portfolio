import { headers } from "next/headers";
import type { Metadata } from "next";
export const PERSONAL = "https://hemayethossain.com";
export const AGENCY = "https://hossainconsulting.com";
export const PORTFOLIO = "https://portfolio.hossainconsulting.com";
export const EMAIL = "hossainconsulting@gmail.com";
export const GITHUB = "https://github.com/hossainconsulting";
// Hossain Consulting business pages, shown in the agency footer only.
export const AGENCY_SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61554142802965",
  },
  { label: "Instagram", href: "https://www.instagram.com/hossainconsulting/" },
  { label: "X", href: "https://x.com/HossainConsult" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hossain-consulting",
  },
  { label: "YouTube", href: "https://www.youtube.com/@hossain-consulting" },
  { label: "TikTok", href: "https://www.tiktok.com/@hossainconsulting" },
  { label: "Pinterest", href: "https://au.pinterest.com/hossainconsulting/" },
];
// Hemayet's personal profiles, shown in the personal footer only.
export const PERSONAL_SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61553978682903",
  },
  { label: "Instagram", href: "https://www.instagram.com/sirhemayethossain/" },
  { label: "X", href: "https://x.com/himu_sydney" },
  { label: "TikTok", href: "https://www.tiktok.com/@sirhemayethossain" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hemayethossain/" },
];
// One shared Calendly booking type serves clients and recruiters (the
// Calendly plan allows one active event type).
export const BOOK_CALL =
  "https://calendly.com/hemayet_hossain/20-minute-intro-call";
export const BOOK_CLIENT_CALL = BOOK_CALL;
export const BOOK_RECRUITER_CALL = BOOK_CALL;
export async function getSite() {
  const host = ((await headers()).get("host") || "")
    .split(":")[0]
    .toLowerCase();
  const agency =
    host === "hossainconsulting.com" || host === "www.hossainconsulting.com";
  return {
    agency,
    origin: agency ? AGENCY : PERSONAL,
    name: agency ? "Hossain Consulting" : "Hemayet Hossain",
  };
}
export async function pageMetadata(
  path: string,
  title: string,
  description: string,
): Promise<Metadata> {
  const site = await getSite();
  return {
    title,
    description,
    alternates: { canonical: site.origin + path },
    openGraph: {
      title,
      description,
      url: site.origin + path,
      type: "website",
      locale: "en_AU",
      siteName: site.name,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
export const projects = [
  {
    number: "01",
    title: "SunRise Solar",
    type: "SALESFORCE ADMINISTRATION",
    status: "In progress · Simulation",
    text: "A fictional solar business, real administration practice. Data quality, access, operational controls and documented checks.",
    slug: "salesforce-sunrise-solar",
    tags: ["Data quality", "Security", "Documentation"],
  },
  {
    number: "02",
    title: "User lifecycle SOP",
    type: "OPERATIONS & CONTROLS",
    status: "Documented · Simulation",
    text: "A practical guide to provisioning, access checks, freezing and deactivating users, drawn from a Salesforce training environment.",
    slug: "salesforce-user-lifecycle-sop",
    tags: ["User management", "Access checks", "Runbooks"],
  },
  {
    number: "03",
    title: "Home Services AI",
    type: "AI & AUTOMATION",
    status: "Planning & scaffold",
    text: "Exploring quote triage, job notes and after-hours enquiry workflows for fictional trade businesses. Implementation is not yet complete.",
    slug: "home-services-ai",
    tags: ["AI agents", "Workflow design", "Learning project"],
  },
];
