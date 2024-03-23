"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { MetaMaskProvider } from '@metamask/sdk-react';
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [backgroundImage, setBackgroundImage] = useState('/img/background.png');

  const host = typeof window !== "undefined" ? window.location.host : "defaultHost";
  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };


  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundImage: 'url(/img/background-1.png)'}}>
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <Navbar />
          {children}
        </MetaMaskProvider>
      </body>
    </html>
  );
}
