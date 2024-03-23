import React from 'react';
import './success.css';
import IMile, { IOption } from '../../mile';
import InputSelect from '@/app/components/input-select/input-select';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import MileDetail from '@/app/components/mile-detail/mile-detail';

interface SuccessProps {
    formData: IMile;
}

const Success: React.FC<SuccessProps> = ({ formData }) => {

    return (<>
        <div className="success">
            <span className="title3">Parabéns! Sua jornada está começando!</span>
            <span className="subtitle2">Acompanhe e compartilhe sua Mile com a comunidade</span>
            {/* <MileDetail mile={formData} /> */}
        </div>
    </>
    );
};

export default Success;