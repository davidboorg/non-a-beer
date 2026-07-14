import { CanVideoSection } from "@/components/can-video-section";
import { PageIntro } from "@/components/page-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <PageIntro
        subtitle="Press & influencers"
        headline={
          <>
            Support the
            <br />
            project!
          </>
        }
        headlineClassName="mt-2 mb-0 text-[43px] leading-[1.1] font-bold tracking-[-1.3px] uppercase md:mt-4 md:text-[99px] md:leading-[1] md:tracking-[-0.99px]"
      >
        <p className="mx-auto mt-6 max-w-[608px] text-[12px] leading-[14px] font-medium tracking-[0.24px] uppercase md:mt-8">
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
      </PageIntro>

      <CanVideoSection />

      <SiteFooter />
    </main>
  );
}
