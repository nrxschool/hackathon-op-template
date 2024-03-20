import React from 'react';
import './goal.css'; // Arquivo de estilos CSS
import InputText from '@/app/components/input-text/input-text';
import IMile, { IOption } from '../../mile';
import InputSelect from '@/app/components/input-select/input-select';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface GoalProps {
  formData: IMile;
  handleChange: (key: string, value: string) => void;
}

const Goal: React.FC<GoalProps> = ({ formData, handleChange }) => {

  return (<>
    <div className="goal-form">
      <InputText
        type="textarea"
        label="Meta ao alcançar 10%"
        value={formData.goal10}
        onChange={(value) => handleChange('goal10', value)}
        height={80}
      />
      <InputText
        type="textarea"
        label="Meta ao alcançar 35%"
        value={formData.goal35}
        onChange={(value) => handleChange('goal35', value)}
        height={80}
      />
      <InputText
        type="textarea"
        label="Meta ao alcançar 70%"
        value={formData.goal70}
        onChange={(value) => handleChange('goal70', value)}
        height={80}
      />
      <InputText
        type="textarea"
        label="Meta ao alcançar 100%"
        value={formData.goal100}
        onChange={(value) => handleChange('goal100', value)}
        height={80}
      />
    </div>
  </>
  );
};

export default Goal;