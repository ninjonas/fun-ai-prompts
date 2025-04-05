import { stylistTones } from "./stylistTone";

export class OnboardingData {
  constructor(public question: string, public options: string[], public nextStep: string) {}
}

export const onboardingSteps = [
  new OnboardingData("What's your dressing vibe today?", ["Chill", "Energetic", "Romantic", "Professional", "Adventurous"], "/onboarding/steps/2"),
  new OnboardingData("What practical needs do you have for your outfit?", ["Comfort", "Durability", "Flexibility", "Style", "Warmth"], "/onboarding/steps/3"),
  new OnboardingData("Do you consider the weather when picking your outfit?", ["Always", "Sometimes", "Rarely", "Never"], "/onboarding/steps/4"),
  new OnboardingData("How do you want your outfit to make you feel?", ["Confident", "Relaxed", "Attractive", "Powerful", "Carefree"], "/onboarding/steps/5"),
  new OnboardingData(
    "How do you usually decide on your outfit?",
    ["By vibe", "By practicality", "Based on weather", "Planned ahead", "Spontaneously"],
    "/onboarding/steps/6"
  ),
  new OnboardingData("Pick your stylist (or mix a few)", Object.keys(stylistTones), "/onboarding/complete"),
];
