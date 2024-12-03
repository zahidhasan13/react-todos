/* eslint-disable react/prop-types */
const TodoItem = ({ todo }) => {
  console.log(todo.task);
  return (
    <div>
      <h1>{todo.task}</h1>
    </div>
  );
};

export default TodoItem;
