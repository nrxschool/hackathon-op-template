import React from 'react';
import './progress-bar.css'; // Arquivo de estilos CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface ProgressBarProps {
  currentStep: number;
  steps: string[]
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {

  const getStepNumber = (step: number): string => {
    if (step < 10) {
      return `0${step}`
    }
    return `${step}`
  }

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="step-container">
            <div className={`circle ${currentStep >= index ? 'circle-completed' : ''}`}><span className={`step-number ${currentStep >= index ? 'completed' : ''}`}>{currentStep > index ? <FontAwesomeIcon icon={faCheck} /> : getStepNumber(index+1)}</span></div>
            <div className={`step-text ${currentStep > index ? 'text-completed' : ''}`}>{step}</div>
          </div>
          {index !== steps.length - 1 && <div className={`line ${currentStep -1  > index ? 'line-completed' : ''}`}></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;