export function SiteFooter() {
  return (
    <footer className="bg-black px-[38px] pb-16 pt-20 text-white md:pb-20 md:pt-24">
      <div className="mx-auto max-w-[1364px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-footer.svg"
          alt="Surprise Systems"
          width={161}
          height={99}
          className="block h-[99px] w-[161px]"
        />

        <p className="mt-8 max-w-[292px] text-[12px] leading-[14px] tracking-[0.24px] uppercase">
          © 2026 Surprise Systems. All rights reserved. All trademarks, logos,
          images, and other intellectual property displayed on this website are
          the property of Surprise Systems or their respective owners and may
          not be reproduced, distributed, or used without prior written
          permission.
        </p>
      </div>
    </footer>
  );
}
