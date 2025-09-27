"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ArrowUpRight, Menu } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-5">
      <div className="bg-primary rounded-brand flex w-full justify-between px-1">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={39}
          className="px-2 py-1"
        />

        <div className="hidden md:flex">
          <NavMenu />
        </div>
        <div className="my-auto md:hidden">
          <Menu />
        </div>
      </div>
      <motion.button
        initial="initial"
        whileHover="hover"
        className="bg-secondary text-secondary-foreground hover:bg-foreground rounded-brand font-roboto-condensed hidden shrink-0 cursor-pointer items-center gap-2 px-3 py-2 font-semibold whitespace-nowrap md:flex"
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
    </header>
  );
}

const sportsItems: { title: string; href: string; description: string }[] = [
  {
    title: "Cricket",
    href: "/sports/cricket",
    description:
      "Experience the thrill of cricket, from T20s to test matches. Join leagues, track scores, and more.",
  },
  {
    title: "Football",
    href: "/sports/football",
    description:
      "Play or follow football matches, join local tournaments, and stay updated with the latest scores.",
  },
  {
    title: "Foosball",
    href: "/sports/foosball",
    description:
      "Challenge friends to a fast-paced game of foosball. Find tables, join events, and view leaderboards.",
  },
  {
    title: "Badminton",
    href: "/sports/badminton",
    description:
      "Book courts, join badminton clubs, and participate in singles or doubles tournaments.",
  },
  {
    title: "Table Tennis",
    href: "/sports/table-tennis",
    description:
      "Compete in table tennis matches, track your progress, and connect with other players.",
  },
  {
    title: "Basketball",
    href: "/sports/basketball",
    description:
      "Join pickup games, leagues, or tournaments. Stay updated with basketball events near you.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="font-roboto-condensed font-medium">
        <NavigationMenuItem className="hover:bg-foreground rounded-brand hover:text-primary">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/about-us"
              className="hover:text-primary bg-transparent transition-colors duration-150 ease-in-out"
            >
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-foreground hover:text-primary bg-transparent">
            Sports
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-foreground bg-transparent">
            <ul className="grid w-[300px] gap-2 md:w-[450px] md:grid-cols-2">
              {sportsItems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:bg-foreground rounded-brand hover:text-primary">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/game-formats"
              className="hover:text-primary bg-transparent transition-colors duration-150 ease-in-out"
            >
              Game Formats
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-foreground rounded-brand hover:text-primary">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/pricing"
              className="hover:text-primary bg-transparent transition-colors duration-150 ease-in-out"
            >
              Pricing
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-foreground rounded-brand hover:text-primary">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/sportsbook"
              className="hover:text-primary bg-transparent transition-colors duration-150 ease-in-out"
            >
              Sportsbook
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="hover:text-primary text-sm leading-none font-bold">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
