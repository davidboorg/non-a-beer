import type { Metadata } from "next";
import { CanVideoSection } from "@/components/can-video-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/lib/metadata";

type ContactPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export async function generateMetadata({
  searchParams,
}: ContactPageProps): Promise<Metadata> {
  const { intent } = await searchParams;
  const isLobbyist = intent === "lobbyist";

  return createPageMetadata({
    title: isLobbyist ? "Lobbyist Inbox" : "Contact",
    description: isLobbyist
      ? "Send your manifesto to the Non-Alcoholic Beer lobbyist inbox at Surprise Systems."
      : "Contact Surprise Systems about Non-Alcoholic Beer pre-orders, partnerships, and general inquiries.",
    path: isLobbyist ? "/contact?intent=lobbyist" : "/contact",
  });
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { intent } = await searchParams;
  const isLobbyist = intent === "lobbyist";

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <PageIntro
        subtitle="Contact"
        headline={
          isLobbyist ? (
            <>
              We hear you,
              <br />
              lobbyist
            </>
          ) : (
            "Get in touch!"
          )
        }
        headlineClassName="mt-2 mb-0 text-[43px] leading-[1.1] font-bold tracking-[-1.3px] uppercase md:mt-4 md:text-[99px] md:leading-[1] md:tracking-[-0.99px]"
      >
        <p className="mx-auto mt-6 max-w-[348px] text-[12px] leading-[14px] font-medium tracking-[0.24px] uppercase md:mt-8">
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
      </PageIntro>

      <CanVideoSection showBackLink />

      <SiteFooter />
    </main>
  );
}
