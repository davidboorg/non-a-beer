import { SiteFooter } from "@/components/site-footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { PathwaysSection } from "@/components/pathways-section";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <main className="bg-[#e9eae9]">
      <SiteHeader />
      <HeroSection />
      <PathwaysSection />
      <GallerySection />
      <SiteFooter />
    </main>
  );
}
