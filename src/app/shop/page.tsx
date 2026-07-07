import Image from "next/image";
import Link from "next/link";
import { CheckoutButton } from "@/components/checkout-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatPrice, preorderBundle } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#e9eae9]">
      <SiteHeader />

      <section className="px-5 py-12 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden bg-black/5">
            <Image
              src={preorderBundle.image}
              alt={preorderBundle.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[12px] tracking-[0.24px] text-[#9d9d9d] uppercase">
              Limited pre-order
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] font-bold tracking-[-0.01em] uppercase">
              {preorderBundle.name}
            </h1>
            <p className="mt-6 max-w-lg text-[14px] leading-[1.5] tracking-[0.02em]">
              {preorderBundle.description}
            </p>

            <p className="mt-8 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em]">
              {formatPrice(
                preorderBundle.priceInCents,
                preorderBundle.currency,
              )}
            </p>

            <ul className="mt-8 space-y-2 text-[12px] tracking-[0.24px] uppercase">
              {preorderBundle.includes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="mt-10">
              <CheckoutButton productId={preorderBundle.id} />
            </div>

            <p className="mt-6 max-w-md text-[11px] leading-[14px] tracking-[0.18px] text-[#9d9d9d] uppercase">
              Secure checkout powered by Stripe. You will receive an order
              confirmation by email. Pre-orders ship when production is complete.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block text-[12px] font-medium tracking-[0.24px] uppercase underline underline-offset-4"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
