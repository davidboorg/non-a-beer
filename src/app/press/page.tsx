import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[#e9eae9]">
      <SiteHeader />

      <PageIntro
        subtitle="Press & influencers"
        headline={
          <>
            <span className="md:hidden">
              Support the
              <br />
              project!
            </span>
            <span className="hidden md:inline">
              Support the
              <br />
              project!
            </span>
          </>
        }
        headlineClassName="mt-2 text-[53px] leading-[45.8px] font-bold tracking-[-1.6px] uppercase md:mt-4 md:text-[99px] md:leading-[90px] md:tracking-[-0.99px]"
      />

      <section className="px-5 pb-0 text-center md:px-8">
        <p className="mx-auto max-w-[608px] text-[12px] leading-[14px] tracking-[0.24px] uppercase">
          Journalists and influencers are welcome to use our official image
          assets for promotional and editorial purposes. Please review the usage
          terms on the homepage before downloading or publishing.
          <br />
          <br />
          For interview requests, high-resolution assets, or collaboration
          inquiries, reach out to{" "}
          <a
            href="mailto:info@thenonalcoholicbeer.com"
            className="underline underline-offset-4"
          >
            info@thenonalcoholicbeer.com
          </a>
        </p>

        <div className="relative mx-auto mt-8 max-w-[1467px] overflow-hidden md:mt-12">
          <div className="aspect-[1467/1800] w-full overflow-hidden md:aspect-[1467/2200]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-can-new.png"
              alt=""
              className="h-full w-full object-cover object-[center_15%]"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
