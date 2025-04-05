import React from "react";
import { useRouter } from "next/navigation";

type OnboardingStepProps = {
  question: string;
  options: string[];
  nextStep: string;
};

const OnboardingStep: React.FC<OnboardingStepProps> = ({ question, options, nextStep }) => {
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
    router.push(nextStep);
  };

  return (
    <div className="onboarding-step">
      <h1>{question}</h1>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleOptionClick(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnboardingStep;
