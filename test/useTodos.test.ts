import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useTodos } from "../src/hooks/useTodo";
import { INITIAL_STATE } from "../src/data/initial-items";

describe("useTodos", () => {
  test("should return an empty array by default", () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual(INITIAL_STATE);
  });

  test("should add a todo", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("test");
    });
    const todosWithNewTodo = [
      ...INITIAL_STATE,
      {
        id: expect.any(String),
        text: "test",
        done: false,
        timestamp: expect.any(Number),
      },
    ];
    // One new todo is added
    expect(result.current.todos).toEqual(todosWithNewTodo);

    act(() => {
      result.current.addTodo("test2");
    });
    const todosWithNewTodo2 = [
      ...todosWithNewTodo,
      {
        id: expect.any(String),
        text: "test2",
        done: false,
        timestamp: expect.any(Number),
      },
    ];
    // One new todo is added again
    expect(result.current.todos).toEqual(todosWithNewTodo2);
  });
  // Truncate todos
  test("should delete a todo", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.truncateTodos(); //truncate todos
    });

    expect(result.current.todos).toEqual([]);

    act(() => {
      result.current.addTodo("test"); // add a todo
    });
    expect(result.current.todos.length).toEqual(1);

    act(() => {
      result.current.removeTodo(result.current.todos[0].id); // remove the todo
    });
    expect(result.current.todos.length).toEqual(0);
  });
});
