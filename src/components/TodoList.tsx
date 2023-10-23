import { Item, ItemId } from "../types";
import Todo from "./Todo";

interface TodoListProps {
  todos: Item[];
  onRemoveTodo: (id: ItemId) => void;
}

const TodoList = ({ todos, onRemoveTodo }: TodoListProps) => {
  const sortByDate = (a: Item, b: Item) => {
    return b.timestamp - a.timestamp;
  };

  const orderedTodosByDate = todos.map((todo) => todo).sort(sortByDate);

  return (
    <ul className="flex flex-col gap-2">
      {orderedTodosByDate.map((todo) => {
        return <Todo key={todo.id} todo={todo} onRemove={onRemoveTodo} />;
      })}
    </ul>
  );
};

export default TodoList;
