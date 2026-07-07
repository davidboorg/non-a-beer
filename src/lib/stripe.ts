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
  name: "Limited Edition 6-Pack + T-Shirt",
  description:
    "Pre-order the Non-Alcoholic Beer limited-edition 6-pack and exclusive T-shirt bundle.",
  priceInCents: 49900,
  currency: "sek" as const,
};
