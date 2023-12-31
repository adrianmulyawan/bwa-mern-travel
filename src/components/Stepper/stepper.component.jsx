import React, { useState } from 'react';
import propTypes from 'prop-types';

const StepperComponent = (props) => {
  const {steps, initialStep} = props;
  
  const stepKeys = Object.keys(steps);

  const [currentStep, setCurrentStep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
  );

  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(currentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep + 1]);
  }

  return (
    <>
      { props.children(prevStep, nextStep, currentStep, steps) }
    </>
  );
}

StepperComponent.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string.isRequired
};

export default StepperComponent;
