export const stylistTones = {
  "Hype Bestie": ["fun", "affirming", "high-energy"],
  "Soft Minimalist": ["calm", "clean", "grounded"],
  "Bold Trendsetter": ["confident", "fashion-forward", "edgy"],
  "Spiritual Stylist": ["poetic", "intuitive", "aligned with energy"],
  "Thoughtful Curator": ["analytical", "intentional", "refined"],
  "Cozy Comfort Coach": ["gentle", "warm", "casual"],
};
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
    ["By vibe", "By practicality", "Based on weather", "Planned ahead", "Spontaneously", "By what my body looks like, ATM"],
    "/onboarding/steps/6"
  ),
  new OnboardingData(
    "Pick your stylist (or mix a few)",
    Object.entries(stylistTones).map(([stylist, tones]) => `${stylist}: ${tones.join(", ")}`),
    "/onboarding/complete"
  ),
];
