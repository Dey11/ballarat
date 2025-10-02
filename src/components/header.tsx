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
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileSidebar from "./mobile-sidebar";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ContactUsButton from "./landing/contact-us";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = prevOverflow || "";
      document.body.style.touchAction = prevTouchAction || "";
    }
    return () => {
      document.body.style.overflow = prevOverflow || "";
      document.body.style.touchAction = prevTouchAction || "";
    };
  }, [isMobile, isOpen]);

  return (
    <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-5">
      <div
        className={cn(
          "bg-primary w-full",
          isMobile
            ? isOpen
              ? "fixed inset-0 z-[100] flex h-[100svh] w-[100svw] flex-col p-4 px-5"
              : "rounded-brand flex justify-between px-1"
            : "rounded-brand flex justify-between px-1",
        )}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={39}
            className="px-2 py-1"
          />

          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative my-auto size-6"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <Menu
                className={cn(
                  "absolute inset-0 transition-transform duration-300 ease-in-out",
                  isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-transform duration-300 ease-in-out",
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                )}
              />
            </button>
          </div>
          <div className="hidden md:block">
            <NavMenu />
          </div>
        </div>
        {isOpen && isMobile && <MobileSidebar />}
      </div>
      {!isMobile && <ContactUsButton />}
    </header>
  );
}

const sportsItems: { title: string; href: string; description: string }[] = [
  {
    title: "Box Cricket",
    href: "/sports/box-cricket",
    description:
      "Play fast-paced indoor box cricket. Join leagues, book sessions, and compete with friends.",
  },
  {
    title: "Futsal",
    href: "/sports/futsal",
    description:
      "Experience the excitement of futsal. Book courts, join teams, and participate in tournaments.",
  },
  {
    title: "Indoor AFL",
    href: "/sports/indoor-afl",
    description:
      "Enjoy indoor AFL action. Register for games, join leagues, and stay active all year round.",
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
