import Link from "next/link";
import { ArrowButton } from "@/components/arrow-button";
import { HeroVideo } from "@/components/hero-video";

type CanVideoSectionProps = {
  showBackLink?: boolean;
};

export function CanVideoSection({ showBackLink = false }: CanVideoSectionProps) {
  return (
    <section className="px-5 pb-0 text-center md:px-8">
      {showBackLink ? (
        <Link
          href="/"
          aria-label="Back to homepage"
          className="mx-auto mb-4 inline-flex rotate-180 md:mb-6"
        >
          <ArrowButton />
        </Link>
      ) : null}

      <div className="relative mx-auto mt-4 max-w-[860px] overflow-hidden bg-background md:mt-6">
        <div className="relative left-[-15%] aspect-[525/560] w-[131%] max-w-none md:left-0 md:mx-auto md:aspect-[860/950] md:w-full">
          <HeroVideo className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
