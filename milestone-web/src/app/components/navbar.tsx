"use client";
import Link from 'next/link';
import { ConnectWalletButton } from './connect-wallet-button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="/img/Logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="menu">
        <Link href="/miles">Miles</Link>
        <Link href="/menu2">Produtos</Link>
        <Link href="/menu3">Sobre</Link>
        <Link href="/menu4">Contato</Link>
      </div>
      <div className="buttons">
        <button>Sign in</button>
        <ConnectWalletButton />
      </div>
    </nav>
  );
};

export default Navbar;