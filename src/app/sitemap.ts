import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/work/",
    "/services/",
    "/systems/",
    "/about/",
    "/contact/",
    "/work/priya/",
    "/work/quantumvault/",
  ].map((path) => ({ url: `https://yagyachauhan.me${path}` }));
}
