import { useState } from "react";
import { Item, ItemId } from "../types";
import { INITIAL_STATE } from "../data/initial-items";

export const useTodos = () => {
  const [todos, setTodos] = useState<Item[]>(INITIAL_STATE);
  const removeTodo = (id: ItemId): void => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const addTodo = (text: string): void => {
    // Function to generate a new item based on its text, everything else is generated automatically
    const newItem = {
      id: crypto.randomUUID(),
      text: text,
      done: false,
      timestamp: Date.now(),
    };
    const newTodos = [...todos, newItem];
    setTodos(newTodos);
  };

  const resetTodos = () => {
    setTodos(INITIAL_STATE);
  };
  const truncateTodos = () => {
    setTodos([]);
  };

  return {
    todos,
    removeTodo,
    addTodo,
    resetTodos,
    truncateTodos,
  };
};
