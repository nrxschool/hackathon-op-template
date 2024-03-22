import React from 'react';
import './input-select.css'; // Arquivo de estilos CSS
import { IOption } from '@/app/create-mile/mile';

interface InputSelectProps {
  label: string;
  value: string;
  options: IOption[];
  onChange: (value: string) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({ label, value, options, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="select-input">
      <label className="label">{label}</label>
      <select
        className="select"
        value={value}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;