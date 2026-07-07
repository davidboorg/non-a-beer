import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[#e9eae9]">
      <SiteHeader />
      <section className="px-5 py-24 text-center md:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] font-bold tracking-[-0.01em] uppercase">
            Checkout cancelled
          </h1>
          <p className="mt-8 text-[14px] leading-[1.5]">
            No worries — your pre-order was not completed. You can try again
            whenever you are ready.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/shop"
              className="inline-block bg-black px-8 py-4 text-[12px] font-bold tracking-[0.24px] text-white uppercase"
            >
              Return to shop
            </Link>
            <Link
              href="/"
              className="inline-block text-[12px] font-medium tracking-[0.24px] uppercase underline underline-offset-4"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
