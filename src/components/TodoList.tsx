import { Item, ItemId } from "../types";
import Todo from "./Todo";

interface TodoListProps {
  todos: Item[];
  onRemoveTodo: (id: ItemId) => void;
}

const TodoList = ({ todos, onRemoveTodo }: TodoListProps) => {
  return (
    <ul className="flex flex-col-reverse gap-2">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} onRemove={onRemoveTodo} />;
      })}
    </ul>
  );
};

export default TodoList;
