import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageIntro } from "@/components/page-intro";

type ContactPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { intent } = await searchParams;
  const isLobbyist = intent === "lobbyist";

  return (
    <main className="min-h-screen bg-[#e9eae9]">
      <SiteHeader />

      <PageIntro
        subtitle="Contact"
        headline={isLobbyist ? "We hear you, lobbyist" : "Get in touch!"}
        headlineClassName="mt-2 text-[53px] leading-[45.8px] font-bold tracking-[-1.6px] uppercase md:mt-4 md:text-[99px] md:leading-[90px] md:tracking-[-0.99px]"
      />

      <section className="px-5 pb-0 text-center md:px-8">
        <p className="mx-auto max-w-[348px] text-[12px] leading-[14px] tracking-[0.24px] uppercase">
          {isLobbyist ? (
            <>
              If you are a pro alcohol lobbyist who wants to burn this project
              to the ground, send your manifesto to:
              <br />
              <br />
              <a
                href="mailto:lobbyist@surprisesystems.io"
                className="underline underline-offset-4"
              >
                lobbyist@surprisesystems.io
              </a>
            </>
          ) : (
            <>
              Questions about Non-Alcoholic Beer, pre-orders, or partnerships?
              Send us a message at:
              <br />
              <br />
              <a
                href="mailto:info@thenonalcoholicbeer.com"
                className="underline underline-offset-4"
              >
                info@thenonalcoholicbeer.com
              </a>
            </>
          )}
        </p>

        <div className="relative mx-auto mt-8 max-w-[1467px] overflow-hidden md:mt-12">
          <div className="aspect-[1467/1800] w-full overflow-hidden md:aspect-[1467/2200]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-can-new.png"
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
