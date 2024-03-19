import { ReactNode } from "react";
import { Outfit } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    template: "%s | devstore",
    default: "devstore",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={outfit.variable} lang="pt">
      <body className="bg-background-800">{children}</body>
    </html>
  );
}
