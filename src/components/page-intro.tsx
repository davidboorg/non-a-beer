import type { ReactNode } from "react";

type PageIntroProps = {
  children?: ReactNode;
  headline: ReactNode;
  headlineClassName?: string;
  subtitle?: string;
};

export function PageIntro({
  children,
  headline,
  headlineClassName,
  subtitle,
}: PageIntroProps) {
  return (
    <div className="mx-auto max-w-[1381px] px-5 pt-4 text-center md:px-8 md:pt-6">
      <p className="mx-auto max-w-[819px] text-[9px] leading-[10px] tracking-[0.18px] uppercase md:text-[12px] md:leading-[14px] md:tracking-[0.24px]">
        This is the official site of Non-Alcoholic Beer. The harmless
        alternative to destructive alcoholic beverages that could
        <br className="md:hidden" /> ruin your life.
      </p>

      {subtitle ? (
        <p className="mt-4 font-serif text-[12px] leading-[14px] italic tracking-[-0.04em] uppercase md:mt-6 md:text-[25px] md:leading-[28px]">
          {subtitle}
        </p>
      ) : null}

      <h1
        className={
          headlineClassName ??
          "mt-6 mb-6 text-[clamp(2.5rem,6.9vw,6.19rem)] leading-[0.91] font-bold tracking-[-0.01em] uppercase md:mt-4 md:mb-8"
        }
      >
        {headline}
      </h1>

      {children}
    </div>
  );
}
