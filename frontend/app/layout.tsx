import { ReactNode } from "react";
import { Outfit } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "~~/utils/SessionProvider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    template: "%s | CryptoGuardian",
    default: "CryptoGuardian",
  },
  icons: "/logo.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html className={`${outfit.variable} h-full`} lang="pt">
      <body className="bg-background-800 h-full">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
