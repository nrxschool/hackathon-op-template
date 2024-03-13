import type { NextPage } from 'next';
import { useLocalStorage } from 'usehooks-ts';
import { MetaHeader } from '~~/components/MetaHeader';
import { ContractUI } from '~~/components/scaffold-eth';
import { ContractName } from '~~/utils/scaffold-eth/contract';
import { getContractNames } from '~~/utils/scaffold-eth/contractNames';

const selectedContractStorageKey = 'scaffoldEth2.selectedContract';

const Debug: NextPage = () => {
  const contractNames = getContractNames();
  const [selectedContract, setSelectedContract] = useLocalStorage<ContractName>(
    selectedContractStorageKey,
    contractNames[0],
  );

  const renderContractButtons = () =>
    contractNames.map(contractName => (
      <button
        className={`btn btn-secondary btn-sm normal-case font-thin ${
          contractName === selectedContract ? 'bg-base-300' : 'bg-base-100'
        }`}
        key={contractName}
        onClick={() => setSelectedContract(contractName)}
      >
        {contractName}
      </button>
    ));

  const renderContractsUI = () =>
    contractNames.map(contractName => {
      const isVisible = contractNames.length < 2 || contractName === selectedContract;
      return (
        <ContractUI
          key={contractName}
          contractName={contractName}
          className={isVisible ? '' : 'hidden'}
        />
      );
    });

  const renderNoContractsMessage = () => <p className="text-3xl mt-14">No contracts found!</p>;

  const renderDebugInstructions = () => (
    <div className="text-center mt-8 bg-secondary p-10">
      <h1 className="text-4xl my-0">Debug Contracts</h1>
      <p className="text-neutral">
        You can debug & interact with your deployed contracts here.
        <br /> Check{' '}
        <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
          packages / nextjs / pages / debug.tsx
        </code>
      </p>
    </div>
  );

  return (
    <>
      <MetaHeader
        title="Debug Contracts | Fullstack Web3 Template"
        description="Debug your deployed 🏗 Fullstack Web3 Template contracts in an easy way"
      />
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        {contractNames.length === 0
          ? renderNoContractsMessage()
          : (
            <>
              {contractNames.length > 1 && (
                <div className="flex flex-row gap-2 w-full max-w-7xl pb-1 px-6 lg:px-10 flex-wrap">
                  {renderContractButtons()}
                </div>
              )}
              {renderContractsUI()}
            </>
          )
        }
      </div>
      {renderDebugInstructions()}
    </>
  );
};

export default Debug;
