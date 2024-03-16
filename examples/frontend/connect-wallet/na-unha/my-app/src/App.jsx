import React, { useState } from 'react';
import { ethers } from 'ethers';
import "./App.css";

function ConnectWallet() {
  const [enderecoConectado, setEnderecoConectado] = useState('');
  
  async function conectarMetaMask() {
    try {
      if (window.ethereum) {
        // Solicitar permissão ao usuário para acessar a carteira MetaMask
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts', []);

        // Obter o endereço conectado
        const signer = await provider.getSigner();
        const endereco = signer.address;
        setEnderecoConectado(endereco);

        console.log('Conectado à MetaMask!');
        console.log('Endereço Conectado:', enderecoConectado);
      } else {
        console.error('MetaMask não detectado!');
      }
    } catch (error) {
      console.error('Erro ao conectar à MetaMask:', error);
    }
  }

  return (
    <button onClick={conectarMetaMask}>
      {enderecoConectado ? `Conectado: ${enderecoConectado}` : 'Conectar Carteira'}
    </button>
  );
}

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectWallet />
    </div>
  );
}

export default App;
