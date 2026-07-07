import { HeroVideo } from "@/components/hero-video";

export function HeroSection() {
  return (
    <section className="pb-0">
      <div className="px-5 pt-6 text-center md:px-8">
        <p className="mx-auto max-w-[819px] text-[12px] leading-[14px] tracking-[0.24px] uppercase">
          This is the official site of Non-Alcoholic Beer. The harmless
          alternative to destructive alcoholic beverages that could ruin your
          life.
        </p>

        <h1 className="mx-auto mt-6 max-w-[1381px] text-[clamp(2.75rem,6.9vw,6.19rem)] leading-[0.91] font-bold tracking-[-0.01em] uppercase">
          Probably
          <br />
          the least lethal
          <br />
          beer in the world
        </h1>

        <p className="mx-auto mt-6 max-w-[819px] font-serif text-[25px] leading-[14px] italic tracking-[-0.04em] uppercase">
          Reduce the risk of dying today!
        </p>
      </div>

      <div className="mt-10 w-full overflow-hidden">
        <HeroVideo />
      </div>
    </section>
  );
}
