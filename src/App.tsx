import { useState } from "react";
import { Item } from "./types";
import { INITIAL_STATE } from "./data/initial-items";

function App() {
  const [items, setItems] = useState<Item[]>(INITIAL_STATE);

  const generateNewItem = (text: string): Item => {
    // Function to generate a new item based on its text, everything else is generated automatically
    return {
      id: crypto.randomUUID(),
      text: text,
      done: false,
      timestamp: Date.now(),
    };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the page from reloading

    const { elements } = event.currentTarget; // Destructuring the form elements

    const input = elements.namedItem("itemText");
    const isInput = input instanceof HTMLInputElement; // Checking if the input is an HTMLInputElement

    if (!isInput || input == null) return; // If the input is not an HTMLInputElement, return

    const newItem = generateNewItem(input.value); // Creating the new item

    setItems([...items, newItem]); //   Adding the new item to the list

    input.value = ""; // Resetting the input value
  };

  return (
    <main className="bg-green-200 gap-16 min-h-screen grid grid-cols-[450px,1fr] p-16 ">
      <aside className="flex flex-col gap-4">
        <h1>React Frontent Exercise🌿</h1>
        <h2>State control with performance</h2>

        <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="bg-green-700 transition-all text-green-100 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:ring-offset-green-200 hover:bg-green-800"
          >
            Add to list
          </button>
        </form>
      </aside>

      <section className="flex flex-col gap-4">
        <h2>List of elements</h2>
        <ul className="flex flex-col gap-2">
          {items.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-green-50 text-green-900 text-xl px-4 py-2 rounded-xl"
              >
                <small className="text-xs">
                  {new Date(item.timestamp).toLocaleDateString("es-ES")}
                </small>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
