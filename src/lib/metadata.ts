import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
};

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
  ogImage = siteConfig.ogImage,
}: PageMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const pageTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      type: "website",
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: ogImage,
          width: 1001,
          height: 1001,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
