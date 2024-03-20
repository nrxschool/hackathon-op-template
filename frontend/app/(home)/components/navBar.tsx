"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export function NavBar() {
  const { data: session, status } = useSession();

  async function handleSign() {
    await signIn("discord");
  }

  async function handleLogout() {
    await signOut();
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToElement(elementId: string) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  if (status === "loading") {
    return <></>;
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <div className="flex bg-background-500/95 p-4 rounded-full gap-8 items-center justify-center flex-grow text-zinc-100">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex justify-center h-[52px] w-28 items-center hover:bg-background-300 p-3 rounded-full transition duration-300"
        >
          <FaArrowUp className="text-lg" />
        </button>

        <button
          type="button"
          onClick={() => scrollToElement("preco")}
          className="flex justify-center h-[52px] items-center text-lg w-28 hover:bg-background-300 p-3 rounded-full transition duration-300"
        >
          Ver Preço
        </button>
        {session ? (
          <>
            <Link
              href="/dashboard"
              className="flex justify-center h-[52px] items-center text-lg w-28 hover:bg-background-300 p-3 rounded-full transition duration-300"
            >
              Dashboard
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex justify-center h-[52px] items-center text-lg w-28 hover:bg-background-300 p-3 rounded-full transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleSign}
            className="flex justify-center h-[52px] items-center text-lg w-28 hover:bg-background-300 p-3 rounded-full transition duration-300"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
