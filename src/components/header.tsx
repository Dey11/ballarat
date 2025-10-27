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
import { usePathname } from "next/navigation";

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
            : "rounded-brand flex justify-between px-1 py-1",
        )}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={39}
              className="px-2 py-1"
            />
          </Link>

          <div className="mt-1 mr-1 block md:hidden">
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
        {isOpen && isMobile && (
          <MobileSidebar onClose={() => setIsOpen(false)} />
        )}
      </div>
      {!isMobile && <ContactUsButton />}
    </header>
  );
}

const sportsItems: { title: string; href: string; description: string }[] = [
  {
    title: "Box Cricket",
    href: "/#games",
    description:
      "Play fast-paced box cricket. Join leagues, book sessions, and compete with friends.",
  },
  {
    title: "Futsal",
    href: "/#games",
    description:
      "Experience the excitement of futsal. Book courts, join teams, and participate in tournaments.",
  },
  {
    title: "Box AFL",
    href: "/#games",
    description:
      "Enjoy box AFL action. Register for games, join leagues, and stay active all year round.",
  },
];

export function NavMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isSportsActive = () => pathname?.startsWith("/sports/");

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="font-roboto-condensed">
        <NavigationMenuItem className="hover:bg-foreground rounded-brand hover:text-primary">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/#about-us"
              className={cn(
                "hover:text-primary bg-transparent text-[1.05rem] transition-colors duration-150 ease-in-out",
                isActive("/about-us") && "underline",
              )}
            >
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "hover:bg-foreground hover:text-primary bg-transparent text-[1.05rem]",
              isSportsActive() && "underline",
            )}
          >
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
              href="/#formats"
              className={cn(
                "hover:text-primary bg-transparent text-[1.05rem] transition-colors duration-150 ease-in-out",
                isActive("/game-formats") && "underline",
              )}
            >
              Game Formats
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-foreground rounded-brand hover:text-primary">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/pricing"
              className={cn(
                "hover:text-primary bg-transparent text-[1.05rem] transition-colors duration-150 ease-in-out",
                isActive("/pricing") && "underline",
              )}
            >
              Pricing
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-foreground rounded-brand hover:text-primary">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
              href="/sports-book"
              className={cn(
                "hover:text-primary bg-transparent text-[1.05rem] transition-colors duration-150 ease-in-out",
                isActive("/sports-book") && "underline",
              )}
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
