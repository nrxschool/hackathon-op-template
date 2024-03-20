import React, { useState } from 'react';
import './input-slider.css';

interface CustomSliderProps {
    min: number,
    max: number,
    step: number,
    label?: string,
    value: number,
    prefix?: string,
    sufix?: string,
    showValue?: boolean,
    onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ min, max, step, label, value, prefix, sufix, showValue=true, onChange }) => {
    const [rangeValue, setRangeValue] = useState<number>(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(event.target.value))
        onChange(Number(event.target.value))
    };

    const getMarks = () => {
        const marks: Map<number, number> = new Map();
        marks.set(1, min)
        marks.set(25, max * .25)
        marks.set(50, max * .50)
        marks.set(75, max * .75)
        marks.set(100, max)

        return marks
    }

    return (
        <div className="slider-input">
            <label className="label">{label}</label>
            <div className={`slider-container ${!showValue ? 'slider-container-without-value' : ''}`}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={rangeValue}
                    onChange={handleChange}
                    className="slider"
                />
                {showValue && <div className="value">{`${prefix ? prefix : ''} ${rangeValue} ${sufix ? sufix : ''}`}</div>}
                <div className="marks">
                    {Array.from(getMarks()).map(([key, value]) => (
                        <span key={key} style={{ left: `${key}%` }}><div>{`${value}${sufix ? sufix : ''}`}</div></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSlider;
