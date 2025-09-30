"use client";

import { useRef } from "react";
import Ribbon from "../ribbon";

type SectionWrapperProps = {
  children: React.ReactNode;
  name: string;
  slide: "left" | "right";
};

export default function SectionWrapper({
  children,
  name,
  slide,
}: SectionWrapperProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className="relative mt-2">
        <Ribbon name={name} slide={slide} containerRef={containerRef} />
      </div>
      {children}
    </div>
  );
}
