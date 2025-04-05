"use client";

import { useRouter } from "next/navigation";
import OnboardingStep from "../../../../components/OnboardingStep";
import { onboardingSteps } from "../../../../lib/onboardingData";

export default function Step4() {
  const step = onboardingSteps[3];

  return <OnboardingStep question={step.question} options={step.options} nextStep={step.nextStep} />;
}
