"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CTAButtons() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Link href="#contact">
        <motion.button
          initial="initial"
          whileHover="hover"
          className="font-roboto-condensed group bg-primary text-foreground hover:border-primary rounded-brand hover:bg-foreground hover:text-primary flex cursor-pointer items-center gap-x-2 border-b-2 border-b-transparent px-4 py-2 text-xl whitespace-nowrap hover:border-b-2 md:px-4 md:py-2"
        >
          <span>Register Interest</span>
          <div className="bg-background group-hover:bg-primary group-hover:text-foreground p-0.2 group-hover:p-0.1 relative flex items-center justify-center overflow-hidden rounded-xs group-hover:rounded-full">
            <motion.div
              className="flex items-center justify-center"
              variants={{
                initial: { x: 0 },
                hover: { x: "100%" },
              }}
              transition={{
                duration: 0.15,
                ease: "easeInOut",
              }}
            >
              <ChevronRight className="size-4" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={{
                initial: { x: "-100%" },
                hover: { x: 0 },
              }}
              transition={{
                duration: 0.15,
                ease: "easeInOut",
              }}
            >
              <ChevronRight className="size-4" />
            </motion.div>
          </div>
        </motion.button>
      </Link>
    </div>
  );
}
