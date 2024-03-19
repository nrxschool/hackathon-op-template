"use client";

import { ReactNode } from "react";
import { NavBar } from "./components/navBar";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Toaster } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";

export default function LayoutHome({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}>
        <div className={twMerge("flex flex-col min-h-screen bg-background-800 antialiased scroll-smooth")}>
          <main className="relative flex flex-col flex-1">{children}</main>
          <Footer />
          <NavBar />
        </div>
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
