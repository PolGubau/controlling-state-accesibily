import { useTodos } from "../hooks/useTodo";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useTodos();
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
