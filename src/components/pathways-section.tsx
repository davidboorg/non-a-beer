import Link from "next/link";

type Pathway = {
  href: string;
  label: string;
  showArrow?: boolean;
};

const pathways: Pathway[] = [
  {
    href: "/shop",
    label:
      "I'm a fan! I want to pre-order a limited-edition 6-pack and T-shirt.",
    showArrow: true,
  },
  {
    href: "/contact?intent=lobbyist",
    label:
      "I'm a pro alcohol lobbyist who wants to burn this to the ground.",
    showArrow: true,
  },
  {
    href: "/press",
    label:
      "I'm a journalist or influencer who wants to support the project.",
  },
];

function ArrowButton() {
  return (
    <span
      aria-hidden
      className="mt-10 inline-flex size-[68px] items-center justify-center rounded-full border-2 border-white"
    >
      <svg
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path
          d="M10 2V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 16L10 25L17 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function PathwaysSection() {
  return (
    <section className="bg-black px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-[893px] text-center">
        <p className="font-serif text-[25px] leading-[14px] italic tracking-[-0.04em] uppercase">
          What do you want?
        </p>

        <div className="mt-20 space-y-24 md:space-y-28">
          {pathways.map((pathway) => (
            <Link
              key={pathway.href}
              href={pathway.href}
              className="group block transition-opacity hover:opacity-80"
            >
              <h2 className="text-[clamp(1.75rem,4.6vw,4.125rem)] leading-[0.89] font-bold tracking-[-0.01em] uppercase">
                {pathway.label}
              </h2>
              {pathway.showArrow ? (
                <div className="flex justify-center">
                  <ArrowButton />
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
