import { Item } from "../types";

export const INITIAL_STATE: Item[] = [
  {
    id: crypto.randomUUID(),
    text: "Learn Nextjs 🤓",
    done: false,
    timestamp: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    text: "Play to the Witcher 3 🎮",
    done: true,
    timestamp: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    text: "A super long text to test the overflow of the list item",
    done: false,
    timestamp: Date.now(),
  },
];

export const EXAMPLE_TODO: Item = {
  id: crypto.randomUUID(),
  text: "Start a new project",
  done: false,
  timestamp: Date.now(),
};
