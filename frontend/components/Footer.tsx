import Link from "next/link";

export function Footer() {
  return (
    <div className="md:px-20 mt-14 w-full mb-32">
      <div className="grid grid-cols-2 bg-background-500 rounded-3xl p-10 text-zinc-100">
        <div className="grid grid-rows-2 justify-start items-start gap-4">
          <p>©{new Date().getFullYear()} CryptoGuardian. Todos os direitos reservados.</p>
          <p>Hackathon Nearx Web3</p>
        </div>

        <div className="grid grid-rows-2 justify-end items-start text-right gap-4">
          <Link href="/">Termos e condições</Link>
          <Link href="/">Política de privacidade</Link>
        </div>
      </div>
    </div>
  );
}
