"use client";

import OnboardingStep from "../../../../components/OnboardingStep";
import { onboardingSteps } from "../../../../lib/onboardingData";

export default function Step3() {
  const step = onboardingSteps[2];

  return <OnboardingStep question={step.question} options={step.options} nextStep={step.nextStep} />;
}
