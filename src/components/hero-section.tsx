import { HeroVideo } from "@/components/hero-video";
import { PageIntro } from "@/components/page-intro";

export function HeroSection() {
  return (
    <section className="pb-0">
      <PageIntro
        headline={
          <>
            <span className="md:hidden">
              Probably
              <br />
              the least
              <br />
              lethal
              <br />
              beer in the
              <br />
              world
            </span>
            <span className="hidden md:inline">
              Probably
              <br />
              the least lethal
              <br />
              beer in the world
            </span>
          </>
        }
        headlineClassName="mt-2 text-[53px] leading-[45.8px] font-bold tracking-[-1.6px] uppercase md:mt-4 md:text-[99px] md:leading-[90px] md:tracking-[-0.99px]"
      >
        <p className="mt-6 font-serif text-[12px] leading-[14px] italic tracking-[-0.04em] uppercase md:mt-8 md:text-[25px]">
          Reduce the risk of dying.
        </p>
      </PageIntro>

      <div className="relative mt-6 overflow-hidden md:mt-10">
        <div className="relative left-[-15%] aspect-[525/922] w-[131%] max-w-none md:left-0 md:mx-auto md:aspect-[860/1511] md:w-full md:max-w-[860px]">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
