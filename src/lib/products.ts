export type Product = {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  currency: "sek";
  image: string;
  includes: string[];
};

export const preorderBundle: Product = {
  id: "preorder-bundle",
  name: "Limited Edition 6-Pack + T-Shirt",
  description:
    "Pre-order the Non-Alcoholic Beer limited-edition 6-pack and exclusive T-shirt bundle. Ships when production is complete.",
  priceInCents: 49900,
  currency: "sek",
  image: "/images/hero-can.png",
  includes: [
    "6× Non-Alcoholic Beer cans (330 ml)",
    "1× Limited-edition T-shirt",
    "Certificate of non-lethality",
  ],
};

export function formatPrice(cents: number, currency: string): string {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }).format(cents / 100);
}
