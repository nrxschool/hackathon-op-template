import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Bem vindo ao projeto de hackathon da </span>
            <span className="block text-4xl font-bold">Equipe Rocket</span>
          </h1>
          <p className="text-center text-lg">
            Comece pela apresentação de nosso projeto disponível no loom:{" "}
            <Link
              href="https://www.loom.com/share/19933fd4613142dc93cd8c7bf2c19d00?sid=614c865f-1219-4fe9-b36c-f107ff9c7918"
              passHref
              className="link"
            >
              Transformando Futuros com Optimisn
            </Link>
            .
          </p>
          <p className="text-center text-lg">
            Por que Optimist? O <code className="italic bg-base-300 text-base font-bold">Optimism Collective</code> visa
            criar uma nova Internet que beneficie a todos e não seja{" "}
            <code className="italic bg-base-300 text-base font-bold"> propriedade de ninguém.</code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Mexa os contrato inteligente usando o{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
