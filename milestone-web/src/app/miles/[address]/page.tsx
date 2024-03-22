"use client"
import { useEffect, useState } from "react";
import api from '../../lib/api'
import IMile from "@/app/create-mile/mile";
import Web3 from 'web3'
import Milestone from '../../lib/contract/Milestone.json'
import { GO_BR_VALUE } from "@/app/lib/constants";
import { useSDK } from "@metamask/sdk-react";
import InputText from "@/app/components/input-text/input-text";

const ProductDetail = ({
    params,
}: {
    params: { address: string };
}) => {
    const [mile, setMile] = useState<IMile>()
    const [transactions, setTransactions] = useState([])
    const [amount, setAmout] = useState('')
    const { sdk, connected, connecting, account } = useSDK();

    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        window.ethereum.enable().catch(error => {
            console.error(error);
        });
    } else {
        console.error('MetaMask is not installed');
    }

    const contractABI = Milestone.abi;
    const contractAddress = params.address;

    const web3 = new Web3((window as any).ethereum)
    let contract = new web3.eth.Contract(contractABI, contractAddress);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/v1/miles?contractAddress=${params.address}`);
                if (response && response.data) {
                    const data: IMile[] = await response.data

                    const finalMilestone = await contract.methods.finalMilestone().call()
                    console.log('FINAL MILESTONE', finalMilestone)

                    const weiBalance: string = await contract.methods.balance().call()
                    const etherBalance = web3.utils.fromWei(weiBalance, 'ether');

                    const milestone = data[0]
                    milestone.actualQtdTokens = Number(etherBalance)
                    milestone.actualValue = Number(etherBalance) * GO_BR_VALUE
                    setMile(data[0]);
                }
            } catch (error) {
                console.error('Error fetching server data:', error);
            }
        };
        fetchData();
    }, [])

    const transferTokens = async () => {
        try {
            const accounts = await web3.eth.getAccounts();

            const result = await contract.methods.donate().send(
                {
                    from: account,
                    gas: '2000000',
                    value: web3.utils.toWei(amount, 'ether')
                }
            );

            console.log('Transferência concluída:', result);
        } catch (error) {
            console.error('Erro ao transferir tokens:', error);
        }
    }

    return <>
        {mile && <main className="flex min-h-screen flex-col items-center justify-between p-24 left-div font-poppin">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <span className="title1">{mile.name}</span>
                    <div className="token">
                        <img src="/img/OP.png" /> {mile.actualQtdTokens} {mile.token}
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="label">Balanço atual $BRL</span>
                            <span className="balance">{mile.actualValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <img src="/img/valorization.png" width="200px" />
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff' }}>
                    <div style={{ borderBottom: '1px solid #D2D2D2', paddingBottom: 15 }}>
                        <span className="title1" style={{ fontSize: 20 }}>Transferência de ativos</span>
                    </div>
                    <div style={{ backgroundColor: '#E9EDFF', borderRadius: 19, marginTop: 20, padding: 20 }}>
                        <div style={{ display: 'flex' }}>
                            <label style={{ marginRight: 10 }}><img src="/img/from.png" width="60px" /></label><span style={{ color: '#24272A', fontSize: 12 }}>{account}</span>
                        </div>
                        <hr style={{ border: '1px solid #D2D2D2', margin: '30px 0 30px 0' }} />
                        <div style={{ display: 'flex' }}>
                            <span style={{ marginRight: 10 }}><img src="/img/to.png" width="60px" /></span><span style={{ color: '#24272A', fontSize: 12 }}>{params.address}</span>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#E9EDFF', marginTop: 30, padding: 20, borderRadius: 8 }}>
                        <div className="token">
                            <img src="/img/OP.png" /> {mile.token}
                        </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <InputText label="Quantidade" value={amount} onChange={setAmout} />
                    </div>
                    <button className='primary-button' onClick={transferTokens}><span style={{ display: 'flex', justifyContent: 'space-around' }}>Faça sua doação <img src="/img/donation.png" /></span></button>
                </div>
                <img src="/img/donations-graph.png" style={{ width: '45%', height: '100%' }} />
            </div>
            <img src="/img/transactions.png" />
        </main>}

        {!mile && <main className="flex min-h-screen flex-col items-center justify-between p-24 centralized-div font-poppin">
            <span className="title">Nenhuma mile encontrada</span>
        </main>}
    </>
}

export default ProductDetail