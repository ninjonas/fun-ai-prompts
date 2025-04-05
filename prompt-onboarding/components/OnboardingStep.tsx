import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "../lib/OnboardingContext";

type OnboardingStepProps = {
  question: string;
  options: string[];
  nextStep: string;
};

const OnboardingStep: React.FC<OnboardingStepProps> = ({ question, options, nextStep }) => {
  const router = useRouter();
  const { addItem } = useOnboarding();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (question: string, option: string) => {
    setSelectedOptions((prevSelected) => (prevSelected.includes(option) ? prevSelected.filter((item) => item !== option) : [...prevSelected, option]));
    addItem(question, option);
  };

  const handleNextClick = () => {
    if (selectedOptions.length > 0) {
      router.push(nextStep);
    } else {
      alert("Please select at least one option before proceeding.");
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="onboarding-step">
      <h1>{question}</h1>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button
              style={{
                width: "200px",
                padding: "10px",
                background: selectedOptions.includes(option)
                  ? "linear-gradient(to right, #5D3FD3, #ff758c)"
                  : `linear-gradient(to right, rgba(255, 0, 0, ${Math.max(0.1, index / options.length)}), rgba(0, 0, 255, ${Math.max(0.1, index / options.length)}))`,
                color: selectedOptions.includes(option) ? "white" : "black",
                fontWeight: selectedOptions.includes(option) ? "bold" : "normal",
                transition: "transform 0.2s, background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              onClick={() => handleOptionClick(question, option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleBackClick} style={{ marginRight: "10px" }}>
          Go Back
        </button>
        <button onClick={handleNextClick} disabled={selectedOptions.length === 0}>
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep;
