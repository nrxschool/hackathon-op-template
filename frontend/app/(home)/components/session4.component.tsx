import { Benefits } from "~~/app/(home)/components/cards/benefits.component";

export function Session4Component() {
  return (
    <div className="mt-80 text-center">
      <div className="flex justify-center items-center flex-wrap">
        <p className="text-primary-500 text-xl md:text-2xl uppercase w-full font-semibold">grandes benefícios</p>
        <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl text-zinc-100">Benefícios da assinatura</h1>
      </div>

      <div className="leading-relaxed text-xl mt-10 text-zinc-400">
        <p className="">
          Facilitamos o controle intuitivo do seu servidor, simplificando o gerenciamento <br /> dos níveis de acesso e
          determinando quais canais seus usuários podem acessar.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 justify-center items-center mt-16 md:px-20 lg:px-60 gap-10">
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
  );
}
