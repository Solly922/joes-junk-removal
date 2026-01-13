import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joe's Junk Removal LLC | Tucson's Trusted Junk Removal Service",
  description:
    "Professional junk removal services in Tucson, AZ. Residential & commercial cleanup, appliance removal, yard waste disposal, and hoarding clean-up. Family-owned and operated. Call today for a free quote!",
  keywords: [
    "junk removal",
    "Tucson",
    "appliance removal",
    "yard waste",
    "hoarding cleanup",
    "commercial junk removal",
    "residential junk removal",
  ],
  openGraph: {
    title: "Joe's Junk Removal LLC | Tucson's Trusted Junk Removal Service",
    description:
      "Professional junk removal services in Tucson, AZ. Family-owned and operated.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
