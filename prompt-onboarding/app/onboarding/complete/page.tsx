"use client";
import { useOnboarding, OnboardingDetails } from "../../../lib/OnboardingContext";

export default function Complete() {
  const { selectedItems }: { selectedItems: OnboardingDetails[] } = useOnboarding();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">You're all set!</h2>
      <p className="mb-2">Here's your AI stylist prompt:</p>
      <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
        Generate a stylish outfit for someone who prefers bold streetwear. They are dressing for a date, feeling playful, and the weather is sunny. They typically choose
        their outfits based on mood. The stylist voice should be confident, fun, and affirming — like a bold trendsetter mixed with a hype bestie.
      </pre>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Your Selections:</h3>
        <ul className="list-disc list-inside">
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.question} <strong>{item.selectedItem}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
