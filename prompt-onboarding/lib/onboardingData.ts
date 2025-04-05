import { stylistTones } from "./stylistTone";

export class OnboardingData {
  constructor(public question: string, public options: string[], public nextStep: string) {}
}

export const onboardingSteps = [
  new OnboardingData("What’s your preferred fashion style?", ["Streetwear", "Minimalist", "Romantic", "Bold", "Sporty"], "/onboarding/steps/2"),
  new OnboardingData("What event are you dressing for?", ["Work", "Casual outing", "Date", "Special event", "Travel"], "/onboarding/steps/3"),
  new OnboardingData("How are you feeling today?", ["Confident", "Relaxed", "Romantic", "Tired", "Playful"], "/onboarding/steps/4"),
  new OnboardingData("What's the weather like?", ["Sunny", "Rainy", "Cold", "Hot", "Cloudy"], "/onboarding/steps/5"),
  new OnboardingData(
    "How do you usually pick your outfit?",
    ["By mood", "By practicality", "Planned the night before", "Based on comfort", "Whatever feels right"],
    "/onboarding/steps/6"
  ),
  new OnboardingData("Pick your stylist (or mix a few)", Object.keys(stylistTones), "/onboarding/complete"),
];
