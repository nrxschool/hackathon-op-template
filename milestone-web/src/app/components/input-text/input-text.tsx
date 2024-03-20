import React from 'react';
import './input-text.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InputTextProps {
    label?: string;
    value: string;
    type?: string
    icon?: IconDefinition;
    height?: number
    onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ type="text", label, value, icon, onChange, height=150 }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="text-input">
            <label className="label">{label}</label>
            {!icon && type !== "textarea" && <input
                type={type}
                className="input-1"
                value={value}
                onChange={handleChange}
            />}
            {icon && type !== "textarea" && <div className="input-container">
                <FontAwesomeIcon icon={icon} className="input-icon"/>
                <input
                    type={type}
                    className="input"
                    value={value}
                    onChange={handleChange}
                />
            </div>

            }
            {type === 'textarea' && <textarea
                value={value}
                className="textarea"
                onChange={handleChangeTextArea}
                style={{ height: height }}

            />}
        </div>
    );
};

export default InputText;