import React from 'react';
import './mark.css'; // Arquivo de estilos CSS
import InputText from '@/app/components/input-text/input-text';
import IMile, { IOption } from '../../mile';
import InputSelect from '@/app/components/input-select/input-select';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import CustomSlider from '@/app/components/input-slider/input-slider';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

interface MarkProps {
    formData: IMile;
    handleChange: (key: string, value: string) => void;
}

const Mark: React.FC<MarkProps> = ({ formData, handleChange }) => {

    const handleEndDateSlider = (value: number) => {
        console.log(formData.startDate)
        console.log(value)
        console.log(formData.endDate)
    }

    return (<>
        <div className="mark-form">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '100%' }}>
                    <CustomSlider
                        min={1}
                        max={100}
                        step={1}
                        label="Valor final"
                        value={formData.finalValue}
                        onChange={(value) => handleChange('finalValue', String(value))}
                        prefix='R$'
                        sufix='mil' />
                </div>
            </div>
            <label className="label">Duração da mile</label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48%' }}>
                    <InputText
                        label="Data de início"
                        value={formData.startDate}
                        type="date"
                        onChange={(value) => handleChange('startDate', value)}
                    />
                </div>
                <div style={{ width: '48%' }}>
                    <InputText
                        label="Data de término"
                        value={formData.endDate}
                        type="date"
                        onChange={(value) => handleChange('endDate', value)}
                    />
                </div>
            </div>
            {/* <CustomSlider
                min={1}
                max={36}
                step={1}
                value={formData.finalValue}
                onChange={(value) => handleEndDateSlider(value)}
                sufix='meses'
                showValue={false}/> */}
        </div>
        <div style={{height: 80}}></div>
    </>
    );
};

export default Mark;