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
    width?: number
    placeholder?: string
    onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ type="text", label, value, icon, onChange, height=150, width, placeholder }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    const style = width ? {width: width} : {}

    return (
        <div className="text-input" style={style}>
            <label className="label">{label}</label>
            {!icon && type !== "textarea" && <input
                type={type}
                className="input-1"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />}
            {icon && type !== "textarea" && <div className="input-container">
                <FontAwesomeIcon icon={icon} className="input-icon"/>
                <input
                    type={type}
                    className="input"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            </div>

            }
            {type === 'textarea' && <textarea
                value={value}
                className="textarea"
                placeholder={placeholder}
                onChange={handleChangeTextArea}
                style={{ height: height }}

            />}
        </div>
    );
};

export default InputText;