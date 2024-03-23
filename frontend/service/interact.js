import React, { useState, useEffect } from "react";
import abi from "./abi.json";

const urlProvider = process.env.URL_PROVIDOER;
const contractAdress = process.env.CONTRACT_ADDRESS;

const web3 = new Web3(urlProvider); // Configure o provedor Web3 com o seu endpoint Ethereum

const contractAbi = abi;
const contractAddress = contractAdress;

const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

export const sendHashToBlockchain = async (hashedData) => {
    try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        const result = await contractInstance.methods
            .storeHash(hashedData)
            .send({
                from: account,
                gas: 200000,
            });

        console.log("Transação confirmada:", result);
    } catch (error) {
        console.error("Erro ao enviar transação:", error);
    }
};
