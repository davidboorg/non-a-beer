import Image from "next/image";
import Link from "next/link";

const desktopThumbnails = [
  {
    src: "/images/gallery-2.png",
    alt: "Opening a Non-Alcoholic Beer can",
    crop: { height: "113.82%", left: "0", top: "-13.72%", width: "104.59%" },
  },
  {
    src: "/images/gallery-4.png",
    alt: "Non-Alcoholic Beer cans in ice",
    crop: { height: "113.82%", left: "0", top: "-13.72%", width: "104.59%" },
  },
  {
    src: "/images/gallery-3.png",
    alt: "Person carrying Non-Alcoholic Beer 6-pack",
    crop: { height: "113.82%", left: "0", top: "-7.01%", width: "104.59%" },
  },
  {
    src: "/images/gallery-5.png",
    alt: "Person drinking Non-Alcoholic Beer",
    crop: { height: "113.82%", left: "0", top: "-7.01%", width: "104.59%" },
  },
];

const galleryMainAlt = "Non-Alcoholic Beer cans in ice";

const mobileGallery = [
  {
    src: "/images/gallery-main.jpg",
    alt: galleryMainAlt,
    crop: null,
  },
  {
    src: "/images/gallery-2.png",
    alt: "Opening a Non-Alcoholic Beer can",
    crop: { left: "-11.31%", top: "-11%", size: "122.25%" },
  },
  {
    src: "/images/gallery-3.png",
    alt: "Person carrying Non-Alcoholic Beer 6-pack",
    crop: { left: "-12.57%", top: "-9.78%", size: "141.61%" },
  },
  {
    src: "/images/gallery-4.png",
    alt: "Non-Alcoholic Beer can studio shot",
    crop: null,
  },
  {
    src: "/images/gallery-5.png",
    alt: "Person drinking Non-Alcoholic Beer",
    crop: null,
  },
];

function GalleryDisclaimer() {
  return (
    <p className="max-w-[300px] text-left text-[10px] leading-[11px] tracking-[0.2px] uppercase md:text-[12px] md:leading-[14px] md:tracking-[0.24px]">
      This is the official image asset library for the Non-Alcoholic Beer.
      These images may be used for promotional and journalistic purposes only.
      <br />
      <br />
      By downloading or using these assets, you agree not to alter,
      misrepresent, or use them in a misleading or defamatory manner. All
      trademarks, logos, and other brand elements remain the property of their
      respective owners.
      <br />
      <br />
      Download press kit{" "}
      <Link href="/press" className="underline underline-offset-2">
        here
      </Link>
    </p>
  );
}

export function GallerySection() {
  return (
    <section className="bg-background px-[17px] py-12 md:px-[38px] md:py-24">
      <div className="mx-auto max-w-[1364px]">
        <div className="hidden items-start gap-[63px] lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
          <GalleryDisclaimer />
          <div className="aspect-square w-full overflow-hidden">
            <Image
              src="/images/gallery-main.jpg"
              alt={galleryMainAlt}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:hidden">
          <GalleryDisclaimer />
        </div>

        <div className="mt-8 hidden grid-cols-2 gap-4 md:grid md:grid-cols-4 md:gap-6 lg:grid">
          {desktopThumbnails.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative aspect-[326/300] overflow-hidden"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={326}
                  height={300}
                  className="absolute max-w-none object-cover"
                  style={{
                    height: image.crop.height,
                    left: image.crop.left,
                    top: image.crop.top,
                    width: image.crop.width,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-5 lg:hidden">
          {mobileGallery.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative aspect-square overflow-hidden"
            >
              {image.crop ? (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={371}
                    height={371}
                    className="absolute max-w-none object-cover"
                    style={{
                      height: image.crop.size,
                      left: image.crop.left,
                      top: image.crop.top,
                      width: image.crop.size,
                    }}
                  />
                </div>
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={371}
                  height={371}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
