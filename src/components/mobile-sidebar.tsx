import { motion } from "motion/react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";
import { Button } from "./ui/button";

export default function MobileSidebar() {
  const [isSportsOpen, setIsSportsOpen] = useState(false);

  return (
    <aside className="h-[100svh] pt-10">
      <motion.ul
        layout
        className="flex h-[80svh] flex-col gap-6 overflow-y-auto overscroll-contain"
      >
        {sidebarItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{
              duration: 0.35,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={item.title}
          >
            <SidebarListItem
              {...item}
              isSportsOpen={isSportsOpen}
              setIsSportsOpen={setIsSportsOpen}
            />
          </motion.div>
        ))}
      </motion.ul>

      <Button
        className="bg-secondary text-secondary-foreground hover:bg-foreground w-full justify-between"
        asChild
      >
        <Link href="/contact-us">
          <span className="font-bebas-neue text-xl uppercase">Contact Us</span>
          <ArrowUpRight className="size-5" />
        </Link>
      </Button>
    </aside>
  );
}

const sidebarItems = [
  { title: "About Us", href: "/about-us" },
  {
    title: "Sports",
    href: "/sports",
    children: [
      { title: "Box Cricket", href: "/sports/box-cricket" },
      { title: "Futsal", href: "/sports/futsal" },
      { title: "Indoor AFL", href: "/sports/indoor-afl" },
    ],
  },
  { title: "Game Formats", href: "/game-formats" },
  { title: "Pricing", href: "/pricing" },
  { title: "Sportsbook", href: "/sportsbook" },
];

type SidebarListItemProps = {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
  isSportsOpen?: boolean;
  setIsSportsOpen?: (open: boolean) => void;
};

function SidebarListItem({
  title,
  href,
  children,
  isSportsOpen,
  setIsSportsOpen,
}: SidebarListItemProps) {
  const isSports = title === "Sports";

  if (isSports && children) {
    return (
      <motion.li className="w-full">
        <Collapsible open={isSportsOpen} onOpenChange={setIsSportsOpen}>
          <CollapsibleTrigger asChild>
            <button className="font-bebas-neue flex w-full items-center justify-between text-5xl uppercase">
              {title}
              {isSportsOpen ? (
                <ChevronUp className="size-8" />
              ) : (
                <ChevronDown className="size-8" />
              )}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <motion.div className="mt-4 space-y-3 pl-4">
              {children.map((child, index) => (
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  key={child.href}
                  className="w-[80svw]"
                >
                  <Link
                    href={child.href}
                    className="font-bebas-neue flex max-w-[80svw] items-center justify-between text-3xl uppercase transition-colors"
                  >
                    {child.title}
                    <ArrowUpRight className="size-5" />
                  </Link>
                  {index !== children.length - 1 && (
                    <Separator className="bg-foreground" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
        <Separator className="bg-foreground" />
      </motion.li>
    );
  }

  return (
    <motion.li className="w-full">
      <Link
        href={href}
        className="font-bebas-neue flex items-center justify-between text-5xl uppercase"
      >
        {title}
        <ArrowUpRight className="size-8" />
      </Link>
      <Separator className="bg-foreground" />
    </motion.li>
  );
}
