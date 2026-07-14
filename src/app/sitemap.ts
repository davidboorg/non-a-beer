import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/shop", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/press", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
