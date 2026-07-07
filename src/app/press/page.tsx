import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[#e9eae9]">
      <SiteHeader />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-[clamp(1.25rem,2.5vw,1.56rem)] italic tracking-[-0.04em]">
            Press &amp; influencers
          </p>
          <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] font-bold tracking-[-0.01em] uppercase">
            Support the project
          </h1>
          <p className="mt-8 text-[14px] leading-[1.6]">
            Journalists and influencers are welcome to use our official image
            assets for promotional and editorial purposes. Please review the
            usage terms on the homepage before downloading or publishing.
          </p>
          <p className="mt-6 text-[14px] leading-[1.6]">
            For interview requests, high-resolution assets, or collaboration
            inquiries, reach out to{" "}
            <a
              href="mailto:press@surprisesystems.io"
              className="underline underline-offset-4"
            >
              press@surprisesystems.io
            </a>
            .
          </p>
          <Link
            href="/"
            className="mt-10 inline-block text-[12px] font-medium tracking-[0.24px] uppercase underline underline-offset-4"
          >
            ← Back to home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
