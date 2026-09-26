import type { MetadataRoute } from "next";
import { getSite } from "@/lib/site";
export default async function robots(): Promise<MetadataRoute.Robots> {
  const s = await getSite();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: s.origin + "/sitemap.xml",
  };
}
