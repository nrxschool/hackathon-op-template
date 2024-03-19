import { FaPlus } from "react-icons/fa6";
import { Header } from "~~/components/dashboard";

export default function Dashboard() {
  return (
    <>
      <div className="p-8">
        <Header
          title="Gerenciar Regras"
          description="Crie regras para limitar o acesso ao seu servidor discord. Essas funções podem ser linkadas aos respectivios cargos."
          right={
            <button className="border border-primary-500 text-primary-500 p-4 rounded-md font-normal flex items-center gap-2">
              <FaPlus className="text-primary-500" size={18} />
              Criar Regra
            </button>
          }
        />
      </div>
      {/* <div className="flex flex-col justify-center text-center items-center gap-4">
        <h1 className="text-xl">Você ainda não configurou nenhum regra para seus cargos</h1>
        <h4 className="text-md font-thin">Basta clicar em criar regra e seguir as instruções</h4>
        <button className="bg-primary-500 p-4 py-2 rounded-md w-[200px] mx-auto font-normal mt-4">Criar Regras</button>
      </div> */}
      <div className="grid grid-cols-8 gap-4 ml-8">
        <div className="grid col-span-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Regra de acesso" chain="chain aqui" token="token aqui" address="endereco" min="1" max="10" />
          <Card title="Regra de acesso" chain="chain aqui" token="token aqui" address="endereco" min="1" max="10" />
          <Card title="Regra de acesso" chain="chain aqui" token="token aqui" address="endereco" min="1" max="10" />
          <Card title="Regra de acesso" chain="chain aqui" token="token aqui" address="endereco" min="1" max="10" />
          <Card title="Regra de acesso" chain="chain aqui" token="token aqui" address="endereco" min="1" max="10" />
          <Card title="Regra de acesso" chain="chain aqui" token="token aqui" address="endereco" min="1" max="10" />
          <Card title="Regra de acesso" chain="chain aqui" token="token aqui" address="endereco" min="1" max="10" />
        </div>
        <div className="col-span-2 bg-background-300 rounded-tl-lg p-4 flex flex-col">
          <h4>Cargos</h4>
          <div className="mt-4">
            <button className="p-4 py-3 bg-opacity-30 bg-primary-500 rounded-lg w-full text-start">Cargo aqui</button>
            <button className="p-4 py-3 bg-opacity-30 rounded-lg w-full text-start">Cargo aqui</button>
            <button className="p-4 py-3 bg-opacity-30 rounded-lg w-full text-start">Cargo aqui</button>
            <button className="p-4 py-3 bg-opacity-30 rounded-lg w-full text-start">Cargo aqui</button>
            <button className="p-4 py-3 bg-opacity-30 rounded-lg w-full text-start">Cargo aqui</button>
            <button className="p-4 py-3 bg-opacity-30 rounded-lg w-full text-start">Cargo aqui</button>
            <button className="p-4 py-3 bg-opacity-30 rounded-lg w-full text-start">Cargo aqui</button>
            <button className="p-4 py-3 bg-opacity-30 rounded-lg w-full text-start">Cargo aqui</button>
          </div>
        </div>
      </div>
    </>
  );
}

type TCard = {
  title: string;
  chain: string;
  token: string;
  address: string;
  min: string;
  max: string;
};

function Card({ title, chain, token, address, min, max }: TCard) {
  return (
    <div className="bg-background-300 grid w-full p-4 rounded-md gap-2">
      <h4 className="mb-2">{title}</h4>
      <div className="flex justify-between items-center">
        <span>Chain / token type</span>
        <span>
          {chain} / {token}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span>Endereço</span>
        <span>{address}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Min / max tokens</span>
        <span>
          {min} / {max}
        </span>
      </div>
    </div>
  );
}
