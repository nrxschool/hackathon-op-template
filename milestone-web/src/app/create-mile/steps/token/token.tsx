import React from 'react';
import './token.css';
import InputText from '@/app/components/input-text/input-text';
import IMile, { IOption } from '../../mile';
import InputSelect from '@/app/components/input-select/input-select';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface TokenProps {
    formData: IMile;
    handleChange: (key: string, value: string) => void;
}

const Token: React.FC<TokenProps> = ({ formData, handleChange }) => {

    const options: IOption[] = [
        {
            value: '',
            name: 'Selecione'
        },
        {
            value: 'OP',
            name: 'OP',
            image: '/img/OP.png'
        }
    ]

    return (<>
        <div className="token-form">
            <InputSelect
                options={options}
                label="Escolha o(s) token(s) que você aceita"
                value={formData.token}
                onChange={(value) => handleChange('token', value)}
            />
            <div style={{ marginTop: 250 }}></div>
            <div style={{padding: '0 50px 0 50px'}}>
                <p className="disclaimer">No momento somente oferecemos suporte para a rede Optmism. Em breve demais tokens e redes serão disponibilizadas. Ao avançar você concorda com nossos <span>Termos de serviços</span> e <span>Políticas de privacidade</span></p>
            </div>
        </div>
        <div style={{ height: 0 }}></div>
    </>
    );
};

export default Token;