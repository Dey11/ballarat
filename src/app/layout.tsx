import type { Metadata } from "next";
import { DM_Sans, Roboto_Condensed, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["600"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  weight: ["500", "800"],
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  variable: "--font-bebas-neue",
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
        className={`antialiased ${dmSans.variable} ${robotoCondensed.variable} ${inter.variable} ${bebasNeue.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
