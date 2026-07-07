import Image from "next/image";

const thumbnails = [
  {
    src: "/images/gallery-main.png",
    alt: "Non-Alcoholic Beer can close-up",
    className: "object-cover object-[center_14%] scale-[1.04]",
  },
  {
    src: "/images/gallery-lifestyle.png",
    alt: "Person drinking Non-Alcoholic Beer",
    className: "object-cover object-left scale-[1.65]",
  },
  {
    src: "/images/gallery-main.png",
    alt: "Non-Alcoholic Beer in fridge",
    className: "object-cover object-[center_14%] scale-[1.04]",
  },
  {
    src: "/images/gallery-lifestyle.png",
    alt: "Non-Alcoholic Beer lifestyle",
    className: "object-cover object-left scale-[1.65]",
  },
];

export function GallerySection() {
  return (
    <section className="px-[38px] py-16 md:py-24">
      <div className="mx-auto max-w-[1364px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-x-[63px] lg:gap-y-0">
          <p className="max-w-[300px] text-left text-[12px] leading-[14px] tracking-[0.24px] uppercase">
            This is the official image asset library for the Non-Alcoholic Beer.
            These images may be used for promotional and journalistic purposes
            only.
            <br />
            <br />
            By downloading or using these assets, you agree not to alter,
            misrepresent, or use them in a misleading or defamatory manner. All
            trademarks, logos, and other brand elements remain the property of
            their respective owners.
          </p>

          <div className="aspect-square w-full overflow-hidden lg:col-start-2 lg:row-start-1">
            <Image
              src="/images/gallery-main.png"
              alt="Hand reaching for Non-Alcoholic Beer in a fridge"
              width={1001}
              height={1001}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {thumbnails.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="aspect-[326/300] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={326}
                height={300}
                className={`h-full w-full ${image.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
