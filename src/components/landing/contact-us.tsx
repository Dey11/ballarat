import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function ContactUsButton() {
  return (
    <Link href="/#contact">
      <motion.button
        initial="initial"
        whileHover="hover"
        className="bg-secondary text-secondary-foreground hover:bg-foreground rounded-brand font-roboto-condensed hidden shrink-0 cursor-pointer items-center gap-2 p-3 font-semibold whitespace-nowrap md:flex"
      >
        <motion.div className="relative overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hover: { y: -20 },
            }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
            }}
          >
            Contact Us
          </motion.span>
          <motion.span
            className="absolute inset-0"
            variants={{
              initial: { y: 20 },
              hover: { y: 0 },
            }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
            }}
          >
            Contact Us
          </motion.span>
        </motion.div>
        <motion.div className="relative overflow-hidden">
          <motion.div
            variants={{
              initial: { x: 0, y: 0 },
              hover: { x: 20, y: -20 },
            }}
            transition={{
              delay: 0.1,
              duration: 0.15,
              ease: "easeInOut",
            }}
          >
            <ArrowUpRight className="size-4" />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            variants={{
              initial: { x: -20, y: 20 },
              hover: { x: 0, y: 0 },
            }}
            transition={{
              delay: 0.1,
              duration: 0.15,
              ease: "easeInOut",
            }}
          >
            <ArrowUpRight className="size-4" />
          </motion.div>
        </motion.div>
      </motion.button>
    </Link>
  );
}
