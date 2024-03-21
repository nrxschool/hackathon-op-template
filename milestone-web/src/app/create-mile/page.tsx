"use client";
import React, { useState } from 'react';
import ProgressBar from "../components/progress-bar/progress-bar"
import Detail from './steps/detail/detail';
import IMile from './mile';
import Mark from './steps/mark/mark';
import Goal from './steps/goal/goal';
import Token from './steps/token/token';
import { useSDK } from "@metamask/sdk-react";
import Web3 from 'web3';
import Milestone from '../lib/contract/Milestone.json'

const CreateMile = () => {
    const steps = ['Detalhes do projeto', 'Sua meta', 'Seus objetivos', 'Defina seus tokens', 'Milestone criada!']
    const [formData, setFormData] = useState<IMile>({
        name: '',
        projectType: '',
        description: '',
        facebook: '',
        instagram: '',
        twitter: '',
        youTube: '',
        finalValue: 0,
        startDate: '',
        endDate: '',
        goal10: '',
        goal35: '',
        goal70: '',
        goal100: '',
        token: ''
    });
    const [currentStep, setCurrentStep] = useState(0)
    const { sdk, connected, connecting, account } = useSDK();

    const handleChange = (fieldName: string, value: string) => {
        setFormData({
            ...formData,
            [fieldName]: value
        });
    };

    const handleSubmit = async () => {
        try {
            console.log('Dados do formulário:', formData);
            const goBrValue = 0.027

            const tokens = formData.finalValue * 1000 * goBrValue

            console.log('TOKENS', tokens)

            if (!(window as any).ethereum) {
                return;
            }
            await (window as any).ethereum.enable();

            if (!connected) {
                return
            }

            const web3 = new Web3((window as any).ethereum);
            const abi: any[] = Milestone.abi
            const bytecode: string = Milestone.bytecode.object

            // Criar uma instância do contrato usando o objeto web3
            const myContract = new web3.eth.Contract(abi);

            const deployedContract = await myContract
                .deploy({
                    data: bytecode,
                    arguments: [tokens], // Se houver construtor com argumentos, passe-os aqui
                })
                .send({
                    from: account,
                    gas: '2000000', // Limite de gás para implantação do contrato
                });

            // Obter o endereço do contrato implantado
            const contractAddress = deployedContract.options.address;
            console.log(contractAddress)
        } catch (error) {
            console.log(error)
        }

    };


    const handleNext = async () => {
        let step = 0;
        if (currentStep == 3) {
            await handleSubmit()
            step = currentStep + 2
        } else {
            step = currentStep + 1
        }
        setCurrentStep(step)
    }
    const handlePrev = () => {
        let step = 0
        if (currentStep == 5) {
            step = currentStep - 2
        } else {
            step = currentStep - 1
        }
        setCurrentStep(step)
    }

    const getOpacity = () => {
        switch (currentStep) {
            case 0:
                return 0.2
            case 1:
                return 0.4
            case 2:
                return 0.6
            case 3:
                return 0.8
            case 4:
                return 1
        }
    }


    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 centralized-div font-poppin">
            <img src="/img/create-flag.png" alt="flag" />
            <span className="title3">Crie sua mile!</span>
            <span className="subtitle2">Preencha os dados</span>
            <ProgressBar currentStep={currentStep} steps={steps} />
            <form>
                {currentStep === 0 && <Detail formData={formData} handleChange={handleChange} />}
                {currentStep === 1 && <Mark formData={formData} handleChange={handleChange} />}
                {currentStep === 2 && <Goal formData={formData} handleChange={handleChange} />}
                {currentStep === 3 && <Token formData={formData} handleChange={handleChange} />}
            </form>
            <div>
                {currentStep > 0 && <button className='outline-button' onClick={handlePrev}>Voltar</button>}
                <button className='primary-button' onClick={handleNext}>Avançar</button>
            </div>
            <div className="bottom-right-image" style={{ opacity: getOpacity() }}>
                <img src="/img/flag.png" width={'40%'} />
            </div>
        </main>
    </>
}

export default CreateMile