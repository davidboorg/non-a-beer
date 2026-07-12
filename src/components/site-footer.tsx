export function SiteFooter() {
  return (
    <footer className="bg-black px-[25px] pb-16 pt-24 text-white md:px-[38px] md:pb-[120px] md:pt-[150px]">
      <div className="mx-auto max-w-[1364px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-footer.svg"
          alt="Surprise Systems"
          width={161}
          height={99}
          className="block h-[66px] w-[107px] md:h-[99px] md:w-[161px]"
        />

        <p className="mt-8 max-w-[292px] text-[8px] leading-[9.3px] tracking-[0.16px] uppercase md:text-[12px] md:leading-[14px] md:tracking-[0.24px]">
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
