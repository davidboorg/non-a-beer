import { NextRequest, NextResponse } from "next/server";
import { preorderBundle } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { productId?: string };
    const productId = body.productId ?? "preorder-bundle";

    if (productId !== preorderBundle.id) {
      return NextResponse.json({ error: "Unknown product" }, { status: 400 });
    }

    const origin =
      request.headers.get("origin") ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000";

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: preorderBundle.currency,
            unit_amount: preorderBundle.priceInCents,
            product_data: {
              name: preorderBundle.name,
              description: preorderBundle.description,
              images: [`${origin}${preorderBundle.image}`],
            },
          },
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["SE", "NO", "DK", "FI", "DE", "GB", "US"],
      },
      phone_number_collection: { enabled: true },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        productId: preorderBundle.id,
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Could not create checkout session" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not start checkout",
      },
      { status: 500 },
    );
  }
}
