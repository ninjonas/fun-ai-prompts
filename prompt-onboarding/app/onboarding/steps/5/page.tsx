"use client";

import OnboardingStep from "../../../../components/OnboardingStep";
import { onboardingSteps } from "../../../../lib/onboardingData";

export default function Step5() {
  const step = onboardingSteps[4];

  return <OnboardingStep question={step.question} options={step.options} nextStep={step.nextStep} />;
}
