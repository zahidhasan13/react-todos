/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const TodoListContext = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data);
  };

  const list = {
    todos,
    setTodos,
  };
  return (
    <TodoListContext.Provider value={list}>{children}</TodoListContext.Provider>
  );
};

export default TodoContext;
