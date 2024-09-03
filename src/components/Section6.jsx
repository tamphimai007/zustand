import React from "react";
import useTodoStore from "../store/todo-store";
import List from "./UI/List";
import InputTodo from "./UI/InputTodo";

const Section6 = () => {
  const { todos } = useTodoStore((state) => ({
    todos: state.todos,
  }));
  console.log(todos);
  return (
    <div
      className="flex flex-col
    gap-2 bg-green-200 w-full h-screen p-4"
    >
      <h1 className="text-2xl font-bold text-center ">Todo List</h1>
      <InputTodo />
      {todos.map((item, index) => (
        <List key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Section6;
