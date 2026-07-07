import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type ContactPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { intent } = await searchParams;
  const isLobbyist = intent === "lobbyist";

  return (
    <main className="min-h-screen bg-[#e9eae9]">
      <SiteHeader />
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-[clamp(1.25rem,2.5vw,1.56rem)] italic tracking-[-0.04em]">
            Contact
          </p>
          <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] font-bold tracking-[-0.01em] uppercase">
            {isLobbyist
              ? "We hear you, lobbyist"
              : "Get in touch"}
          </h1>
          <p className="mt-8 text-[14px] leading-[1.6]">
            {isLobbyist
              ? "If you are a pro alcohol lobbyist who wants to burn this to the ground, we appreciate your passion. Send your manifesto, cease-and-desist, or strongly worded email to:"
              : "Questions about Non-Alcoholic Beer, pre-orders, or partnerships? Send us a message at:"}
          </p>
          <a
            href={
              isLobbyist
                ? "mailto:lobbyist@surprisesystems.io"
                : "mailto:hello@surprisesystems.io"
            }
            className="mt-6 inline-block text-[18px] font-bold tracking-[-0.01em] uppercase underline underline-offset-4"
          >
            {isLobbyist
              ? "lobbyist@surprisesystems.io"
              : "hello@surprisesystems.io"}
          </a>
          <Link
            href="/"
            className="mt-10 block text-[12px] font-medium tracking-[0.24px] uppercase underline underline-offset-4"
          >
            ← Back to home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
