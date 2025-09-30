import Header from "@/components/header";
import Hero from "@/components/landing/hero";
import { ChevronsDown } from "lucide-react";
import GamesSection from "@/components/landing/games-section";
import FeaturesSection from "@/components/landing/features-section";
import PlayingWaysSection from "@/components/landing/playing-ways-section";
import AboutUsSection from "@/components/landing/about-us-section";

export default function page() {
  // max-w-screen-2xl p-4
  return (
    <main className="">
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute -inset-2 -z-10 bg-cover bg-center blur-[3px]"
          style={{
            backgroundImage: "url(/hero_img.png)",
          }}
        >
          <div className="absolute inset-0 z-10 bg-black/50" />
          <div className="bg-primary/60 absolute inset-x-0 bottom-0 z-20 mx-auto h-[10svh] w-3xl rounded-t-full blur-3xl" />
        </div>
        <div className="text-background font-roboto-condensed absolute inset-x-0 bottom-0 z-10 mx-auto flex items-center justify-center gap-x-2 pb-[2svh] text-center text-lg">
          <span>Scroll to explore</span>
          <ChevronsDown className="text-primary size-5" />
        </div>

        <div className="absolute inset-0 z-10 mx-auto max-w-screen-2xl p-4">
          <Header />
          <Hero />
        </div>
      </section>

      <section className="overflow-x-hidden">
        <GamesSection />
      </section>

      <section className="overflow-x-hidden">
        <FeaturesSection />
      </section>

      <section className="overflow-x-hidden">
        <PlayingWaysSection />
      </section>

      <section className="overflow-x-hidden">
        <AboutUsSection />
      </section>
    </main>
  );
}
