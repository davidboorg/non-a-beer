"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { href: "/shop", label: "Pre-order" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ showLogo = true }: { showLogo?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative px-[11px] pt-[14px] md:px-[21px] md:pt-[21px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex max-w-[174px] items-start gap-2 md:max-w-none md:gap-0">
          <Image
            src="/images/logo-small.png"
            alt="Surprise Systems"
            width={44}
            height={27}
            className="h-[14px] w-auto shrink-0 md:mt-0 md:h-[27px]"
          />
          <p className="text-[4.8px] leading-[4.8px] tracking-[0.1px] text-[#9d9d9d] uppercase md:ml-4 md:max-w-[174px] md:text-[9px] md:leading-[9px] md:tracking-[0.18px]">
            Non-Alcoholic Beer is a non-lethal certified product launched by
            Surprise Systems™
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`cursor-pointer text-[12px] font-medium tracking-[0.24px] uppercase underline ${
              menuOpen ? "text-white" : "text-black"
            }`}
            aria-expanded={menuOpen}
          >
            Menu
          </button>

          {menuOpen ? (
            <div className="absolute right-0 top-0 z-50 flex h-[143px] w-[142px] flex-col bg-black px-4 pt-4">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-left text-[12px] font-medium tracking-[0.24px] text-white uppercase underline"
              >
                Menu
              </button>
              <nav className="mt-4 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[12px] font-medium tracking-[0.24px] text-white uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      </div>

      {showLogo ? (
        <div className="mt-2 flex justify-center md:mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-a.svg"
            alt="Non-Alcoholic Beer mark"
            width={164}
            height={187}
            className="h-[92px] w-[81px] md:h-[187px] md:w-[164px]"
          />
        </div>
      ) : null}
    </header>
  );
}
