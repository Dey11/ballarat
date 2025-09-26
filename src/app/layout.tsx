import type { Metadata } from "next";
import { DM_Sans, Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["600"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  weight: ["500", "600"],
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ballarat Box Sports",
  description: "Play like never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${dmSans.variable} ${robotoCondensed.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
