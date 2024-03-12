const deployedContracts = {
  "31337": [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        Counter: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            { inputs: [], name: "increment", outputs: [], stateMutability: "nonpayable", type: "function" },
            {
              inputs: [],
              name: "number",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [{ internalType: "uint256", name: "newNumber", type: "uint256" }],
              name: "setNumber",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default deployedContracts;
