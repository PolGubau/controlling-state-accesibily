import { Item, ItemId } from "@/types";

interface TodoItem {
  items: Item[];
  onChangeItems: (items: Item[]) => void;
}
const TodoList = ({ items, onChangeItems }: TodoItem) => {
  const handleRemoveItem = (id: ItemId) => () => {
    // This is a curried function
    // https://developer.mozilla.org/en-US/docs/Glossary/Currying

    // This function is called when the button is clicked and it returns a function, which is the one that is going to be called

    const newItems = items.filter((item) => item.id !== id);
    onChangeItems(newItems);
  };
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className="bg-green-50 text-green-900 text-xl p-3 pl-4 rounded-2xl"
          >
            <header className="flex justify-between">
              <small className="text-xs">
                {new Date(item.timestamp).toLocaleDateString("es-ES")}
              </small>
              <button
                className="bg-rose-700 transition-all text-rose-100 aspect-square h-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 focus:ring-offset-rose-200 hover:bg-rose-800"
                onClick={handleRemoveItem(item.id)}
              ></button>
            </header>
            <p className="flex gap-2">
              <span>{item.text}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
