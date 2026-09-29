import type { MetadataRoute } from "next";
import { getSite } from "@/lib/site";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const s = await getSite();
  return (
    s.agency
      ? ["/", "/privacy", "/legal"]
      : ["/", "/projects", "/about", "/skills", "/resume", "/privacy", "/legal"]
  ).map((path) => ({
    url: s.origin + (path === "/" ? "" : path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
