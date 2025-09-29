"use client";

import { useRef } from "react";
import Ribbon from "../ribbon";
import { ChevronRight, ShieldCheck } from "lucide-react";
import GameBox from "./game-box";

export default function GamesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div ref={containerRef} className="relative mt-2">
        <Ribbon name="Sports" slide="left" containerRef={containerRef} />
      </div>
      <div className="mx-auto max-w-screen-2xl p-4 pt-16">
        <h4 className="font-inter from-primary via-primary/70 to-primary text-foreground mx-auto flex w-fit items-center gap-x-2 rounded-full bg-gradient-to-r px-4 py-1 text-xs">
          <span className="font-bold italic">FIFA Approved</span> synthetic
          turfs
          <ShieldCheck className="size-4" />
        </h4>

        <h2 className="font-dm-sans mt-5 text-center text-4xl font-semibold text-pretty">
          Choose Your Game
        </h2>
        <h3 className="font-inter mx-auto mt-3 max-w-xl text-center font-medium text-pretty">
          Whether you're a seasoned team or just having a kick with mates, we've
          got the perfect pitch for your Futsal, AFL, or Cricket match.
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-5 pt-10 pb-5">
          <GameBox
            capacity={6}
            description="6-a-side box cricket is a fast-paced, exciting format of the game, perfect for small teams. It emphasizes quick reflexes."
            image="/game-boxes/box-cricket.png"
            name="Box Cricket"
            svg="/game-boxes/box-cricket.svg"
          />
          <GameBox
            capacity={5}
            description="6-a-side box cricket is a fast-paced, exciting format of the game, perfect for small teams. It emphasizes quick reflexes."
            image="/game-boxes/futsal.png"
            name="Futsal"
            svg="/game-boxes/futsal.svg"
          />
          <GameBox
            capacity={5}
            description="6-a-side box cricket is a fast-paced, exciting format of the game, perfect for small teams. It emphasizes quick reflexes."
            image="/game-boxes/indoor-afl.png"
            name="Indoor AFL"
            svg="/game-boxes/indoor-afl.svg"
          />
        </div>

        <div className="bg-foreground text-primary rounded-brand font-roboto-condensed mx-auto flex max-w-[1200px] cursor-pointer items-center justify-between p-2 px-3 text-xs font-semibold sm:text-base">
          <p>
            Casual games begin at $10 per person. Take a look at our pricing!
          </p>

          <div className="bg-background text-foreground rounded-sm p-1">
            <ChevronRight className="size-3 sm:size-4" />
          </div>
        </div>
      </div>
    </>
  );
}
