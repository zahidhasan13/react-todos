import { useContext } from "react";
import { TodoListContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <div className="bg-white p-5 min-h-60">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
