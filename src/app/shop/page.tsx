import Image from "next/image";
import { CheckoutButton } from "@/components/checkout-button";
import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatPrice, preorderBundle } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <PageIntro
        headline={
          <>
            <span className="md:hidden">
              Pre-order
              <br />
              the Non-Alcoholic Beer
              <br />
              limited-edition
              <br />
              6-pack
            </span>
            <span className="hidden md:inline">
              Pre-order
              <br />
              the Non-Alcoholic
              <br />
              Beer limited-edition
              <br />
              6-pack
            </span>
          </>
        }
        headlineClassName="mt-6 mb-6 text-[43px] leading-[1.15] font-bold tracking-[-1.3px] uppercase md:mt-4 md:mb-8 md:text-[99px] md:leading-[1] md:tracking-[-0.99px]"
      >
        <p className="mt-6 font-serif text-[12px] leading-[14px] italic tracking-[-0.04em] uppercase md:mt-8 md:text-[25px] md:leading-[28px]">
          Reduce the risk of dying.
        </p>
      </PageIntro>

      <section className="mt-6 px-[17px] pb-0 md:mt-10 md:px-[44px]">
        <div className="mx-auto max-w-[1346px] space-y-8 md:space-y-12">
          <div className="aspect-[364/323] overflow-hidden md:aspect-[1346/1195]">
            <Image
              src="/images/shop-pack.png"
              alt="Non-Alcoholic Beer limited edition 6-pack"
              width={1346}
              height={1195}
              className="h-full w-full object-cover"
              priority
              sizes="(max-width: 768px) 364px, 1346px"
            />
          </div>

          <div className="text-center">
            <p className="text-[53px] leading-[0.86] font-bold tracking-[-0.03em] uppercase md:text-[100px]">
              {formatPrice(
                preorderBundle.priceInCents,
                preorderBundle.currency,
              )}
            </p>
            <p className="mx-auto mt-4 max-w-[687px] text-[17px] leading-[1.12] tracking-[0.34px] md:text-[40px] md:tracking-[0.8px]">
              {preorderBundle.description}
            </p>

            <div className="mt-6 flex justify-center md:mt-10">
              <CheckoutButton productId={preorderBundle.id} />
            </div>

            <p className="mx-auto mt-6 max-w-[789px] text-[10px] leading-[11px] tracking-[0.2px] uppercase md:mt-10 md:text-[22px] md:leading-[23.7px] md:tracking-[0.44px]">
              Secure checkout powered by Stripe. You will receive an order
              confirmation by email. Pre-orders ship when production is
              complete.
            </p>
          </div>

          <div className="relative aspect-[364/323] overflow-hidden md:aspect-[1346/1195]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src="/images/shop-detail.png"
                alt="Person carrying Non-Alcoholic Beer 6-pack"
                width={2048}
                height={2048}
                className="absolute max-w-none object-cover"
                style={{
                  height: "115.92%",
                  left: "-5.22%",
                  top: "0.08%",
                  width: "115.87%",
                }}
                sizes="(max-width: 768px) 364px, 1346px"
              />
            </div>
          </div>

          <div className="relative aspect-[364/323] overflow-hidden md:aspect-[1346/1195]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src="/images/shop-pack.png"
                alt="Non-Alcoholic Beer packaging detail"
                width={2210}
                height={1962}
                className="absolute max-w-none object-cover"
                style={{
                  height: "209.4%",
                  left: "-70.27%",
                  top: "-54.97%",
                  width: "209.3%",
                }}
                sizes="(max-width: 768px) 364px, 1346px"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
