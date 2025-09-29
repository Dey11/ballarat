"use client";

import { useRef } from "react";
import Ribbon from "../ribbon";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PlayingWaysSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div ref={containerRef} className="relative mt-2">
        <Ribbon name="Formats" containerRef={containerRef} />
      </div>
      <div className="mx-auto max-w-screen-2xl p-4 pt-16">
        <h2 className="font-dm-sans mt-5 text-center text-2xl font-semibold text-pretty sm:text-3xl lg:text-4xl">
          Ways to Play
        </h2>
        <h3 className="font-inter mx-auto mt-3 max-w-lg px-4 text-center text-sm font-medium text-pretty sm:text-base">
          Whether you're after a casual hit-out with mates, a competitive
          league, or just an easy way to join a game, we have a format that's
          perfect for you.
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-10 pb-5 sm:gap-10">
          <CardWrapper
            title="Casual Play"
            footer="Casual games begin at $10 per person!"
            href="/casual-play"
          >
            <div className="font-inter flex w-full flex-col items-center justify-center gap-3 text-nowrap lg:flex-row lg:gap-5">
              <div className="flex w-full flex-col justify-between gap-2">
                <div className="border-primary flex items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2">
                  <Image
                    width={20}
                    height={20}
                    alt="Dollar emoji"
                    src={"/icons/dollar.png"}
                  />

                  <p className="text-sm sm:text-base">
                    <span className="italic">Discounts</span> for regular groups
                  </p>
                </div>
                <div className="border-primary flex items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2">
                  <Image
                    width={30}
                    height={30}
                    alt="Helmet emoji"
                    src={"/icons/helmet.png"}
                  />

                  <p className="text-sm sm:text-base">
                    <span className="italic">Equipment</span> provided for all
                  </p>
                </div>
              </div>

              <div className="bg-foreground text-background flex w-full flex-col gap-1 rounded-lg p-2 lg:w-auto">
                <div className="flex w-full items-center justify-center gap-2 lg:w-80">
                  <Image
                    width={30}
                    height={30}
                    src={"/icons/single-person.png"}
                    alt="single person"
                  />
                  <Image
                    width={30}
                    height={30}
                    src={"/icons/multi-persons.png"}
                    alt="multiple persons"
                  />
                </div>
                <p className="font-inter mx-auto max-w-[200px] text-center text-sm text-pretty sm:text-base">
                  Ideal for <span className="italic">solo players</span> or{" "}
                  <span className="italic">friend groups</span>
                </p>
              </div>
            </div>
          </CardWrapper>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-5 pb-10 sm:gap-5">
          <CardWrapper
            title="Competitive Leagues"
            footer="Join a league now!"
            href="/competitive-play"
            isBottomBox
          >
            <div className="bg-foreground text-background flex w-full justify-center rounded-lg p-2">
              <div className="flex items-center gap-2">
                <Image
                  height={30}
                  width={30}
                  alt="cash"
                  src={"/icons/cash.png"}
                />
                <p className="font-inter max-w-[200px] text-center text-sm text-pretty italic sm:text-base">
                  $1,000 AUD cash prize
                </p>
              </div>
            </div>

            <div className="font-inter flex w-full flex-col items-center justify-center gap-2 pt-2 sm:flex-row">
              <div className="border-primary flex w-full flex-1 items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2 sm:w-auto">
                <Image
                  width={30}
                  height={30}
                  alt="trophy emoji"
                  src={"/icons/trophy.png"}
                />

                <p className="text-sm italic sm:text-base">8-week tournament</p>
              </div>
              <div className="border-primary flex w-full flex-1 items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2 text-nowrap sm:w-auto">
                <Image
                  width={30}
                  height={30}
                  alt="graph emoji"
                  src={"/icons/graph.png"}
                />

                <p className="text-sm italic sm:text-base">
                  Records of player stats
                </p>
              </div>
            </div>
          </CardWrapper>

          <CardWrapper
            title="Knockout Tournaments"
            footer="Sign up for a tournament today!"
            href="/sign-up"
            isBottomBox
          >
            <div className="bg-foreground text-background flex justify-center rounded-lg p-2">
              <div className="flex items-center gap-2">
                <Image
                  height={30}
                  width={30}
                  alt="sparkles emoji"
                  src={"/icons/sparkles.png"}
                />
                <p className="font-inter text-center text-sm text-pretty italic sm:text-base">
                  Perfect mix of casual and competitive
                </p>
              </div>
            </div>

            <div className="font-inter flex w-full flex-col items-center justify-center gap-2 pt-2 sm:flex-row">
              <div className="border-primary flex w-full flex-1 items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2 sm:w-auto">
                <Image
                  width={30}
                  height={30}
                  alt="trophy emoji"
                  src={"/icons/trophy.png"}
                />

                <p className="text-sm italic sm:text-base">One day events</p>
              </div>
              <div className="border-primary flex w-full flex-1 items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2 sm:w-auto">
                <Image
                  width={30}
                  height={30}
                  alt="cash emoji"
                  src={"/icons/cash.png"}
                />

                <p className="text-sm italic sm:text-base">Same Day prize</p>
              </div>
            </div>
          </CardWrapper>
        </div>
      </div>
    </>
  );
}

type CardWrapperProps = {
  children: React.ReactNode;
  title: string;
  footer: string;
  href: string;
  isBottomBox?: boolean;
};

function CardWrapper({
  children,
  title,
  footer,
  href,
  isBottomBox,
}: CardWrapperProps) {
  return (
    <div
      className={cn(
        "w-full rounded-lg border border-[#000000]/40 sm:w-max sm:min-w-[500px]",
        isBottomBox && "sm:w-[500px]",
      )}
    >
      <h3 className="bg-primary font-dm-sans w-full rounded-lg py-2 text-center text-xl font-semibold sm:text-2xl">
        {title}
      </h3>
      <div className="px-2 py-2 sm:px-4">{children}</div>
      <Link
        href={href}
        className="bg-foreground font-roboto-condensed text-primary flex items-center justify-center gap-2 rounded-lg p-2 text-sm font-semibold sm:text-base md:justify-between"
      >
        {footer}
        <div className="bg-background text-foreground rounded-sm p-1">
          <ChevronRight className="size-3 sm:size-4" />
        </div>
      </Link>
    </div>
  );
}
