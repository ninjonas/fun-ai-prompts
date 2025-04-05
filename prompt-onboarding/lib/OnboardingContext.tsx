"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface OnboardingDetails {
  question: string;
  userPreferences: string[];
}
// Define the context
const OnboardingContext = createContext<{
  selectedItems: OnboardingDetails[];
  addItem: (question: string, selectedItem: string) => void;
} | null>(null);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItems, setSelectedItems] = useState<OnboardingDetails[]>([]);

  const addItem = (question: string, selectedItem: string) => {
    // Check if the question already exists in selectedItems
    const existingItemIndex = selectedItems.findIndex((item) => item.question === question);
    if (existingItemIndex !== -1) {
      console.log("Item already exists:", selectedItems[existingItemIndex]);
      const updatedItems = [...selectedItems];
      if (!updatedItems[existingItemIndex].userPreferences.includes(selectedItem)) {
        updatedItems[existingItemIndex].userPreferences.push(selectedItem);
        console.log("Updated item:", updatedItems[existingItemIndex]);
      }
      setSelectedItems(updatedItems);
    } else {
      // If it doesn't exist, add a new item
      setSelectedItems((prevItems) => [...prevItems, { question, userPreferences: [selectedItem] }]);
      console.log("Added new item:", { question, userPreferences: [selectedItem] });
    }

    console.log("Selected Items:", selectedItems);
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
