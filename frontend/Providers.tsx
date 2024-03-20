"use client";

import { ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { appChains } from "~~/services/web3/wagmiConnectors";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <WagmiConfig client={wagmiClient}> */}
      {/* <RainbowKitProvider chains={appChains.chains} avatar={BlockieAvatar}> */}
      {children}
      {/* </RainbowKitProvider> */}
      {/* </WagmiConfig> */}
    </>
  );
};

export default Providers;
