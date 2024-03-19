"use client";

import { MetaMaskProvider } from '@metamask/sdk-react';
import Link from 'next/link';
import { ConnectWalletButton } from './connect-wallet-button';

const Navbar = () => {
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
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="/img/Logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="menu">
        <Link href="/menu1">Miles</Link>
        <Link href="/menu2">Produtos</Link>
        <Link href="/menu3">Sobre</Link>
        <Link href="/menu4">Contato</Link>
      </div>
      <div className="buttons">
        <button>Sign in</button>
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <ConnectWalletButton />
        </MetaMaskProvider>
      </div>
    </nav>
  );
};

export default Navbar;