"use client";
import React, { useState } from 'react';
import ProgressBar from "../components/progress-bar/progress-bar"
import Detail from './steps/detail/detail';
import IMile from './mile';
import Mark from './steps/mark/mark';
import Goal from './steps/goal/goal';
import Token from './steps/token/token';

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

    const handleChange = (fieldName: string, value: string) => {
        setFormData({
            ...formData,
            [fieldName]: value
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Aqui você pode enviar os dados do formulário para o backend
        console.log('Dados do formulário:', formData);
    };

    const handleNext = () => {
        let step = 0;
        if (currentStep == 3) {
            step = currentStep + 2
        } else {
            step = currentStep + 1
        }
        setCurrentStep(step)
        console.log(formData)
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