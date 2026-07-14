import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Order Confirmed",
  description: "Your Non-Alcoholic Beer pre-order is confirmed.",
  path: "/success",
  noIndex: true,
});

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="px-5 py-24 text-center md:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="font-serif text-[clamp(1.25rem,2.5vw,1.56rem)] italic tracking-[-0.04em]">
            Thank you
          </p>
          <h1 className="mt-6 text-[clamp(2rem,5vw,4rem)] leading-[0.95] font-bold tracking-[-0.01em] uppercase">
            Your pre-order is confirmed
          </h1>
          <p className="mt-8 text-[14px] leading-[1.5]">
            You have successfully reduced the risk of dying today. A confirmation
            email is on its way with your order details.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block bg-black px-8 py-4 text-[12px] font-bold tracking-[0.24px] text-white uppercase"
          >
            Back to home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
