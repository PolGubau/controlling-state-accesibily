import Button from "./components/Button";
import TodoList from "./components/TodoList";
import { useSeo } from "./hooks/useSeo";
import { useTodos } from "./hooks/useTodo";

function App() {
  const { todos, addTodo, resetTodos, removeTodo } = useTodos();
  useSeo({
    title: `${todos.length} Items in React Frontend Exercise`,
    description: "State control with performance",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the page from reloading

    const { elements } = event.currentTarget; // Destructuring the form elements

    const input = elements.namedItem("itemText");
    const isInput = input instanceof HTMLInputElement; // Checking if the input is an HTMLInputElement

    if (!isInput || input == null) return; // If the input is not an HTMLInputElement, return

    addTodo?.(input.value); // Adding the new item to the list

    input.value = ""; // Resetting the input value
  };

  return (
    <main className="bg-green-200 gap-16 min-h-screen grid grid-cols-1 md:grid-cols-[350px,1fr] xl:grid-cols-[450px,1fr]  p-16 ">
      <aside className="flex flex-col gap-4">
        <h1>React Frontent Exercise🌿</h1>
        <h2>State control with performance</h2>

        <form
          className="mt-8 flex flex-col gap-2"
          onSubmit={handleSubmit}
          aria-label="Add todos to the list"
        >
          <label className="flex flex-col gap-1 py-2">
            Element to introduce:
            <input
              type="text"
              name="itemText"
              required
              placeholder="Learn nextjs"
              className="text-green-800 bg-green-50 text-xl px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </label>
          <Button text="Add to list" type="submit" />
        </form>
      </aside>

      <section className="flex flex-col gap-4">
        {todos.length === 0 ? (
          <>
            <h2>Instructions</h2>
            <p>1. Add an element to the list</p>
            <p>2. Remove the element from the list</p>{" "}
            <Button text="Add Sample" onClick={resetTodos} />
          </>
        ) : (
          <>
            <h2>Elements of the list</h2>
            <TodoList todos={todos} onRemoveTodo={removeTodo} />
          </>
        )}
      </section>
    </main>
  );
}

export default App;
