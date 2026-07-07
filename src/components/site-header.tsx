import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { href: "/shop", label: "Pre-order" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="relative px-[21px] pt-[21px] md:px-[38px]">
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-[286px]">
          <Image
            src="/images/logo-small.png"
            alt="Surprise Systems"
            width={44}
            height={27}
            className="h-[27px] w-auto"
          />
          <p className="mt-4 text-[9px] leading-[9px] tracking-[0.18px] text-[#9d9d9d] uppercase">
            Non-Alcoholic Beer is a non-lethal certified product launched by
            Surprise Systems™
          </p>
        </div>

        <details className="relative">
          <summary className="cursor-pointer list-none pt-0.5 text-[12px] font-medium tracking-[0.24px] uppercase">
            Menu
          </summary>
          <div className="absolute right-0 z-50 mt-3 min-w-40 border border-black/10 bg-[#e9eae9] p-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-[12px] font-medium tracking-[0.24px] uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>

      <div className="mt-4 flex justify-center md:mt-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-a.svg"
          alt="Non-Alcoholic Beer mark"
          width={164}
          height={187}
          className="h-[187px] w-[164px]"
        />
      </div>
    </header>
  );
}
