import { FaCheckCircle } from "react-icons/fa";
import { Benefits } from "~~/components/cards/benefits";

const valor = 19.99;

export default function Home() {
  return (
    <>
      <div className="px-20 pt-10 w-full h-screen">
        <div className="bg-background-500 h-[95%] py-20 rounded-3xl grid grid-rows-3 justify-center items-center text-center">
          <div className="">
            <h1 className="font-bold text-7xl text-zinc-100">Controle seu Discord,</h1>
            <h1 className="font-bold text-6xl text-primary-500">em uma assinatura</h1>
          </div>

          <p className="leading-relaxed text-2xl text-zinc-400 w-2/3 m-auto">
            Uma assinatura de controle e sem complicações que coloca limites de acesso em seu Discord. Pause ou cancele
            a qualquer momento
          </p>

          <div className="w-2/3 m-auto text-xl text-zinc-400">
            <div className="grid grid-cols-3 justify-center ">
              <p className="flex items-center justify-center gap-2">
                <FaCheckCircle />
                Tarefas ilimitadas
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaCheckCircle />
                Gerenciamento rápido
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaCheckCircle />
                Cancele a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-44 w-full md:px-20 lg:px-96">
        <div className="md:p-20 lg:p-40 bg-background-500 rounded-3xl grid grid-rows-2 justify-center items-center text-center">
          <p className="text-primary-500 text-2xl uppercase font-semibold">ASSINATURA DE INTELIGENTE</p>
          <h1 className="font-bold text-7xl text-zinc-100">Uma solução controle</h1>
          <h1 className="font-bold text-7xl text-zinc-100">totalmente flexível</h1>
        </div>
      </div>

      <div className="flex justify-center items-center mt-80 text-center">
        <h1 className="font-bold text-7xl text-zinc-100">
          Sem contratos <br />
          bagunçados ou <br />
          papeladas
        </h1>
      </div>

      <div className="mt-80  text-center">
        <div className="flex justify-center items-center flex-wrap">
          <p className="text-primary-500 text-2xl uppercase w-full font-semibold">grandes benefícios</p>
          <h1 className="font-bold text-7xl text-zinc-100">Benefícios da assinatura</h1>
        </div>

        <div className="leading-relaxed text-xl mt-10 text-zinc-400">
          <p className="">
            Facilitamos o controle intuitivo do seu servidor, simplificando o gerenciamento <br /> dos níveis de acesso
            e determinando quais canais seus usuários podem acessar.
          </p>
        </div>

        <div className="grid grid-cols-3 justify-center items-center mt-16 md:px-20 lg:px-60 gap-10">
          <Benefits
            img="/cards/ilimitado.svg"
            title="Criação de cargos ilimitados"
            description="Crie quantos cargos precisar através da plataforma, ela automaticamente os enviará ao seu servidor."
          />

          <Benefits
            img="/cards/grafico.svg"
            title="Taxa de mensalidade fix"
            description="Sem surpresas desagradáveis ou preocupações orçamentárias, apenas a mesma taxa fixa a cada mês."
          />

          <Benefits
            img="/cards/block.svg"
            title="Bloqueio automatico"
            description="Você pode bloquear - melhorar esse aqui biel kkkkkkk"
          />
        </div>
      </div>

      <div className="mt-80  text-center  md:px-20 lg:px-96 2xl:px-[32rem]">
        <div className="flex justify-center items-center flex-wrap">
          <p className="text-primary-500 text-2xl uppercase w-full font-semibold">precificação</p>
          <h1 className="font-bold text-7xl text-zinc-100">
            Um preço simples: <br />
            para todo o controle do seu servidor
          </h1>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 justify-center items-center mt-16 gap-10">
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
    </>
  );
}
