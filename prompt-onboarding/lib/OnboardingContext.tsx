"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface OnboardingDetails {
  question: string;
  selectedItem: string;
}
// Define the context
const OnboardingContext = createContext<{
  selectedItems: OnboardingDetails[];
  addItem: (question: string, selectedItem: string) => void;
} | null>(null);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<OnboardingDetails[]>([]);

  const addItem = (question: string, selectedItem: string) => {
    const item: OnboardingDetails = { question, selectedItem };
    setSelectedItems((prevItems) => [...prevItems, item]);
    console.log("Selected Items:", [...selectedItems, item]);
  };

  return <OnboardingContext.Provider value={{ selectedItems, addItem }}>{children}</OnboardingContext.Provider>;
};

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
