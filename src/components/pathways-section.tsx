import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowButton } from "@/components/arrow-button";

type Pathway = {
  href: string;
  label: ReactNode;
};

const pathways: Pathway[] = [
  {
    href: "/shop",
    label:
      "I'm a consumer who wants to pre-order a limited edition 6-pack + t-shirt.",
  },
  {
    href: "/press",
    label:
      "I'm a journalist or influencer who wants to support this project.",
  },
  {
    href: "/contact?intent=lobbyist",
    label: (
      <>
        I&apos;m a pro alcohol lobbyist who wants
        <br />
        to burn this Project
        <br />
        to the ground.
      </>
    ),
  },
];

export function PathwaysSection() {
  return (
    <section className="bg-black px-5 py-12 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-[982px] text-center">
        <p className="font-serif text-[12px] leading-[14px] italic tracking-[-0.04em] uppercase md:text-[25px]">
          What do you want?
        </p>

        <div className="mt-10 space-y-10 md:mt-16 md:space-y-20">
          {pathways.map((pathway) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="group block transition-opacity hover:opacity-80"
            >
              <h2 className="text-[24px] leading-[0.9] font-bold tracking-[-0.01em] uppercase md:text-[clamp(1.75rem,4.6vw,4.125rem)]">
                {pathway.label}
              </h2>
              <div className="mt-4 flex justify-center md:mt-8">
                <ArrowButton />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
