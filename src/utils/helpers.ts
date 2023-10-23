import { Item } from "../types";
export const generateNewItem = (text: string): Item => {
  // Function to generate a new item based on its text, everything else is generated automatically
  return {
    id: crypto.randomUUID(),
    text: text,
    done: false,
    timestamp: Date.now(),
  };
};
