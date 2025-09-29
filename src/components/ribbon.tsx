"use client";

import { motion, useScroll, useTransform } from "motion/react";

type RibbonProps = {
  name?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  slide?: "left" | "right";
};

export default function Ribbon({
  name,
  containerRef,
  slide = "left",
}: RibbonProps) {
  const nameArray = `${name} `.repeat(100).split(" ").slice(0, 100);
  const whitespaces = "\u00A0".repeat(6);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const xPosition = useTransform(
    scrollYProgress,
    [0, 1],
    [slide === "left" ? -200 : 0, slide === "left" ? 200 : -400],
  );

  return (
    <motion.div
      style={{ x: xPosition }}
      className="bg-primary text-foreground font-inter absolute inset-x-0 top-0 w-[400svw] overflow-x-hidden py-1 text-sm font-semibold whitespace-nowrap uppercase italic"
    >
      •{whitespaces}
      {nameArray.map((name, index) => (
        <span key={index}>{name + whitespaces + "•" + whitespaces} </span>
      ))}
    </motion.div>
  );
}
