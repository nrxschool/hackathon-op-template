import { FaCheckCircle } from "react-icons/fa";

export function Session5Component() {
  const valor = 19.99;

  return (
    <div id="preco" className="mt-80 text-center md:px-20 xl:px-60 2xl:px-[32rem]">
      <div className="flex justify-center items-center flex-wrap">
        <p className="text-primary-500 text-xl md:text-2xl uppercase w-full font-semibold">precificação</p>
        <h1 className="font-bold text-2xl md:text-5xl xl:text-7xl text-zinc-100">
          Um preço simples: <br />
          para todo o controle do seu servidor
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 justify-center items-center mt-16 gap-10">
        <div className="p-4 row-span-2 flex flex-col bg-background-500 h-full rounded-3xl text-zinc-100">
          <h1 className="font-semibold text-2xl">Assinatura do Bot</h1>

          <p className="font-bold text-5xl mt-10 text-primary-500">
            {valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            /m
          </p>
          <span className="mt-1 text-sm text-zinc-400">Pausar ou cancelar a qualquer momento</span>

          <button
            type="button"
            className="mt-10 bg-primary-500 rounded-full p-2 text-lg hover:bg-primary-500/80 transition duration-300"
          >
            Começar
          </button>

          <div className="mt-10 flex justify-start items-start flex-col gap-4 text-zinc-400">
            <h3 className="text-zinc-100">O que inclui:</h3>

            <p className="flex items-center justify-center gap-2 pl-4">
              <FaCheckCircle />
              Criação de cargos ilimitados
            </p>

            <p className="flex items-center justify-center gap-2 pl-4">
              <FaCheckCircle />
              Controle das nfts
            </p>

            <p className="flex items-center justify-center gap-2 pl-4">
              <FaCheckCircle />
              Gerencimanto de canais
            </p>
          </div>
        </div>

        <div className="p-4 bg-background-500 h-full rounded-3xl row-span-1">
          <h1 className="font-semibold text-2xl text-zinc-100">Agende uma chamada</h1>

          <p className="mt-4">Caso tenha ficado alguma duvida, entre em contato com nosso suporte!</p>
          <button
            type="button"
            className="mt-4 bg-background-500 border-2 border-zinc-100 w-full rounded-full p-2 text-lg text-zinc-100 hover:text-background-500 hover:bg-zinc-100 transition duration-300"
          >
            Entrar em contato
          </button>
        </div>

        <div className="p-4 bg-background-500 h-full rounded-3xl row-span-1">
          <h1 className="font-semibold text-2xl text-zinc-100">Indique e ganhe</h1>

          <p className="mt-4">Ganhe 5% de comissões mesais para cada cliente pagante que você indicar.</p>
          <button
            type="button"
            className="mt-4 bg-background-500 border-2 border-zinc-100 w-full rounded-full p-2 text-lg text-zinc-100 hover:text-background-500 hover:bg-zinc-100 transition duration-300"
          >
            Acessar agora
          </button>
        </div>
      </div>
    </div>
  );
}
