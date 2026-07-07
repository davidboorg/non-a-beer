import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://non-a-beer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Non-Alcoholic Beer — Probably the least lethal beer in the world",
  description:
    "The official site of Non-Alcoholic Beer. The harmless alternative to destructive alcoholic beverages. Pre-order the limited-edition 6-pack and T-shirt.",
  openGraph: {
    title: "Non-Alcoholic Beer",
    description: "Probably the least lethal beer in the world.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/gallery-main.png",
        width: 1001,
        height: 1001,
        alt: "Non-Alcoholic Beer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Alcoholic Beer",
    description: "Probably the least lethal beer in the world.",
    images: ["/images/gallery-main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
