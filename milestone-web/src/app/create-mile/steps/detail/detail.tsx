import React from 'react';
import './detail.css'; // Arquivo de estilos CSS
import InputText from '@/app/components/input-text/input-text';
import IMile, { IOption } from '../../mile';
import InputSelect from '@/app/components/input-select/input-select';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface DetailProps {
  formData: IMile;
  handleChange: (key: string, value: string) => void;
}

const Detail: React.FC<DetailProps> = ({ formData, handleChange }) => {

  const options: IOption[] = [
    {
      value: '1',
      name: 'Causas sociais'
    },
    {
      value: '2',
      name: 'Construir um negócio'
    },
    {
      value: '3',
      name: 'Gamming'
    },
    {
      value: '4',
      name: 'Startup'
    }
  ]

  return (<>
    <div className="detail-form">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <InputText
            label="Nome da mile"
            value={formData.name}
            onChange={(value) => handleChange('name', value)}
          />
        </div>
        <div style={{ width: '48%' }}>
          <InputSelect
            options={options}
            label="Tipo do projeto"
            value={formData.projectType}
            onChange={(value) => handleChange('projectType', value)}
          />
        </div>
      </div>
      <InputText
        type="textarea"
        label="Descreva seu projeto"
        value={formData.description}
        onChange={(value) => handleChange('description', value)}
      />
      <label className="label">Redes sociais</label>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ width: '48%' }}>
          <InputText
            icon={faFacebook}
            value={formData.facebook}
            onChange={(value) => handleChange('facebook', value)}
          />
        </div>
        <div style={{ width: '48%' }}>
          <InputText
            icon={faInstagram}
            value={formData.instagram}
            onChange={(value) => handleChange('instagram', value)}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ width: '48%' }}>
          <InputText
            icon={faXTwitter}
            value={formData.twitter}
            onChange={(value) => handleChange('twitter', value)}
          />
        </div>
        <div style={{ width: '48%' }}>
          <InputText
            icon={faYoutube}
            value={formData.youTube}
            onChange={(value) => handleChange('youTube', value)}
          />
        </div>
      </div>
    </div>
  </>
  );
};

export default Detail;