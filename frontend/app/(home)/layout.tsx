import { ReactNode } from "react";
import { NavBar } from "./components/navBar";
import "@rainbow-me/rainbowkit/styles.css";
import { Toaster } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { Footer } from "~~/components/Footer";

import Providers from "~~/Providers";

export default function LayoutHome({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Providers>
      <div className={twMerge("flex flex-col min-h-screen bg-background-800 antialiased scroll-smooth")}>
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
        <NavBar />
      </div>
      <Toaster />
    </Providers>
  );
}
