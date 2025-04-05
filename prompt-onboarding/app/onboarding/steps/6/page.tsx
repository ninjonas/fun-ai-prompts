"use client";

import { useRouter } from "next/navigation";
import OnboardingStep from "../../../../components/OnboardingStep";
import { onboardingSteps } from "../../../../lib/onboardingData";

export default function Step6() {
  const step = onboardingSteps[5];

  return <OnboardingStep question={step.question} options={step.options} nextStep={step.nextStep} />;
}
