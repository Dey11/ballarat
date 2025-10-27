import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Book",
  description:
    "Complete rules and regulations for Box Cricket, Futsal, and Box AFL at Ballarat Box Sports. Download the official rulebook.",
  alternates: { canonical: "/sports-book" },
  openGraph: { url: "/sports-book" },
};

export default function SportsBookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
