/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";

export const TodoListContext = createContext();

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [addTask, setAddTask] = useState("");
  const [editedText, setEditedText] = useState("");
  const [toggleEditMode, setToggleEditMode] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching Data
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    setTodos(data);
  };

  // Add task handle event
  const addTaskHandler = (e) => {
    e.preventDefault();
    taskPost(addTask);
    inputRef.current.blur();
    setAddTask("");
  };
  // POST data
  const taskPost = async (task) => {
    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });
    const data = await res.json();
    setTodos([...todos, data]);
  };

  // Delete data
  const deleteHandler = (id) => {
    deleteTask(id);

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // Edit Event
  const handleEdit = (id) => {
    const [editableTarget] = todos.filter((todo) => todo.id === id);
    editableTarget.isEditable = true;
    setEditedText(editableTarget.task);

    setTodos([...todos]);
    setToggleEditMode(false);

    todos
      .filter((todo) => todo.id !== id)
      .map((targetedEl) => (targetedEl.isEditable = false));
  };

  // Edit submitter
  const handleEditSubmitter = (e, id) => {
    e.preventDefault();
    setToggleEditMode(!toggleEditMode);

    const editData = {
      task: editedText,
      id: id,
    };

    putData(id, editData);

    const [editableTarget] = todos.filter((todo) => todo.id === id);
    editableTarget.isEditable = false;
    editableTarget.task = editData.task;

    setTodos([...todos]);
  };

  // Putting data
  const putData = (id, newData) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  };

  const list = {
    todos,
    setTodos,
    addTaskHandler,
    addTask,
    setAddTask,
    deleteHandler,
    inputRef,
    editedText,
    setEditedText,
    handleEdit,
    handleEditSubmitter,
  };
  return (
    <TodoListContext.Provider value={list}>{children}</TodoListContext.Provider>
  );
};

export default TodoContext;
