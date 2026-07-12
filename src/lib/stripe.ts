import Stripe from "stripe";

let stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    stripe = new Stripe(key);
  }
  return stripe;
}

export const PREORDER_PRODUCT = {
  name: "Limited Edition 6-Pack",
  description:
    "6× Non-Alcoholic Beer cans (500 ml) in limited edition 6-pack design.",
  priceInCents: 39900,
  currency: "sek" as const,
};
