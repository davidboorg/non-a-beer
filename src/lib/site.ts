export const siteConfig = {
  name: "Non-Alcoholic Beer",
  tagline: "Probably the least lethal beer in the world",
  description:
    "The official site of Non-Alcoholic Beer — the harmless alternative to destructive alcoholic beverages. Pre-order the limited-edition 6-pack from Surprise Systems.",
  company: "Surprise Systems",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://thenonalcoholicbeer.com",
  locale: "en_US",
  ogImage: "/images/gallery-main.png",
  contactEmail: "info@thenonalcoholicbeer.com",
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteConfig.url}/`).toString().replace(/\/$/, "") || siteConfig.url;
}
