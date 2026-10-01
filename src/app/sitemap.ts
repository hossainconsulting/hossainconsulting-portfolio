import type { MetadataRoute } from "next";
import { getSite } from "@/lib/site";
import { latestPosts, seriesFor, siteKey } from "@/lib/blog";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const s = await getSite();
  const site = siteKey(s.agency);
  const blog = [
    "/blog",
    ...seriesFor(site).map((x) => `/blog/${x.slug}`),
    ...latestPosts(site).map((p) => `/blog/${p.series}/${p.slug}`),
  ];
  return [
    ...(s.agency
      ? ["/", "/privacy", "/legal"]
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
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
