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
  name: "Limited Edition 6-Pack",
  description:
    "6× Non-Alcoholic Beer cans (500 ml) in limited edition 6-pack design.",
  priceInCents: 39900,
  currency: "sek",
  image: "/images/shop-pack.png",
  includes: [
    "6× Non-Alcoholic Beer cans (500 ml)",
    "Limited edition 6-pack design",
  ],
};

export function formatPrice(cents: number, currency: string): string {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }).format(cents / 100);
}
