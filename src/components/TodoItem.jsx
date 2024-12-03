import { useContext } from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { TodoListContext } from "../context/TodoContext";

/* eslint-disable react/prop-types */
const TodoItem = ({ todo }) => {
  const {
    deleteHandler,
    editedText,
    setEditedText,
    handleEdit,
    handleEditSubmitter,
  } = useContext(TodoListContext);

  return (
    <div className="flex items-center justify-between bg-gradient-to-l from-[#1e3799] to-[#0c2461] text-white p-4 rounded-md mb-4">
      <div className="flex items-center gap-2 text-lg">
        <input type="checkbox" name="" id="" className="accent-[#5b7bf7]" />

        {todo.isEditable && (
          <form onSubmit={(e) => handleEditSubmitter(e, todo.id)}>
            <input
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              type="text"
              className="border-2 border-[#1e379960] rounded focus:border-[#fff] outline-none bg-transparent"
            />
          </form>
        )}

        {!todo.isEditable && <p>{todo.task}</p>}
      </div>
      <div className="flex items-center gap-2 text-xl">
        <button onClick={() => handleEdit(todo.id)}>
          <BiEdit />
        </button>
        <button onClick={() => deleteHandler(todo.id)}>
          <BiTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
