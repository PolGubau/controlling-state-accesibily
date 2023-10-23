import { useTodos } from "../hooks/useTodo";
import { Item } from "../types";

interface ListProps {
  todo: Item;
}

const Todo: React.FC<ListProps> = ({ todo }) => {
  const { removeTodo } = useTodos();
  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <li
      key={todo.id}
      className="bg-green-50 text-green-900 text-xl p-3 pl-4 rounded-2xl"
    >
      <header className="flex justify-between">
        <small className="text-xs">
          {new Date(todo.timestamp).toLocaleDateString("es-ES")}
        </small>
        <button
          className="bg-rose-700 transition-all text-rose-100 aspect-square h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 focus:ring-offset-rose-200 hover:bg-rose-800"
          onClick={handleDelete}
        ></button>
      </header>
      {todo.text}
    </li>
  );
};

export default Todo;
