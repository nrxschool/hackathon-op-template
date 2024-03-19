import { FaCheckCircle } from "react-icons/fa";

export function Session1Component() {
  return (
    <div className="px-2 md:px-20 pt-10 w-full h-screen">
      <div className="bg-background-500 h-[95%] py-20 rounded-3xl grid grid-rows-3 justify-center items-center text-center">
        <div className="">
          <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl text-zinc-100">Controle seu Discord,</h1>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-primary-500">em uma assinatura</h1>
        </div>

        <p className="leading-relaxed text-2xl text-zinc-400 w-full sm:w-2/3 m-auto">
          Uma assinatura de controle e sem complicações que coloca limites de acesso em seu Discord. Pause ou cancele a
          qualquer momento
        </p>

        <div className="m-auto text-xl text-zinc-400">
          <div className="grid grid-cols-1 gap-3 xl:gap-0 xl:grid-cols-3 justify-center ">
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
  );
}
