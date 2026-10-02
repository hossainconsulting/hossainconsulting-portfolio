import type { MetadataRoute } from "next";
import { getSite } from "@/lib/site";
import { latestPosts, seriesFor, siteKey } from "@/lib/blog";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const s = await getSite();
  const site = siteKey(s.agency);
  const publishedPosts = latestPosts(site);
  const publicationDates = new Map(publishedPosts.map((post) => [
    `/blog/${post.series}/${post.slug}`, `${post.date}T00:00:00Z`,
  ]));
  const blog = [
    "/blog",
    ...seriesFor(site).map((x) => `/blog/${x.slug}`),
    ...publishedPosts.map((p) => `/blog/${p.series}/${p.slug}`),
  ];
  return [
    ...(s.agency
      ? ["/", "/services", "/privacy", "/legal"]
      : [
          "/",
          "/projects",
          "/about",
          "/skills",
          "/resume",
          "/privacy",
          "/legal",
        ]),
    ...blog,
  ].map((path) => ({
    url: s.origin + (path === "/" ? "" : path),
    ...(publicationDates.has(path) ? { lastModified: publicationDates.get(path) } : {}),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
