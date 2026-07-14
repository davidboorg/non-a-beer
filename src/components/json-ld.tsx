import { siteConfig, absoluteUrl } from "@/lib/site";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    url: siteConfig.url,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contactEmail,
      contactType: "customer service",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.company,
    },
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  );
}

export function ProductJsonLd() {
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Non-Alcoholic Beer Limited Edition 6-Pack",
    description:
      "6× Non-Alcoholic Beer cans (500 ml) in limited edition 6-pack design.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    image: absoluteUrl("/images/shop-pack.png"),
    offers: {
      "@type": "Offer",
      price: "399",
      priceCurrency: "SEK",
      availability: "https://schema.org/PreOrder",
      url: absoluteUrl("/shop"),
    },
  };

  return <JsonLd data={product} />;
}
