import React, { useState } from "react";
import useTodoStore from "../../store/todo-store";
import { toast } from "react-toastify";
const InputTodo = () => {
  const [work, setWork] = useState("");
  const { addTodo } = useTodoStore((state) => ({
    addTodo: state.addTodo,
  }));
  const handleAddTodo = () => {
    addTodo(work);
    toast.success(`Add ${work} success`);
    setWork("");
  };
  const handleChange = (e) => {
    setWork(e.target.value);
  };
  return (
    <div className="flex flex-row justify-between gap-2">
      <input
        onChange={handleChange}
        value={work}
        type="text"
        className="rounded-md p-1 border px-3 w-full"
      />
      <button
        onClick={handleAddTodo}
        className="bg-orange-400 rounded-md px-2
      hover:scale-105 hover:shadow-md"
      >
        Add
      </button>
    </div>
  );
};

export default InputTodo;
