const TodoForm = () => {
  return (
    <form className="flex items-center justify-between px-5 py-2 bg-white border-b-2">
      <input
        type="text"
        placeholder="Add Task"
        className="border-2 border-[#1e379960] px-2 py-1 rounded focus:border-[#1e3799] outline-none"
      />
      <button className="bg-gradient-to-r from-[#1e3799] to-[#0c2461] text-white px-3 py-2 rounded font-semibold hover:from-[#0c2461] hover:to-[#1e3799] transition-all duration-700">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
