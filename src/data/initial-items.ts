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
    text: "A super long text to test the overflow the list item and keep in mind that we don't want to use the CSS property overflow: scroll; because it's not a good practice. 🤓",
    done: false,
    timestamp: Date.now(),
  },
];
