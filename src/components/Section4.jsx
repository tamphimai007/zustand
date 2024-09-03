import React, { useState } from "react";
import useStore from "../store/tam-store";

const Section4 = () => {
  const [text, setText] = useState("");

  const { arr2, addObj, delObj } = useStore((state) => ({
    arr2: state.arr2,
    addObj: state.addObj,
    delObj: state.delObj,
  }));
  const handleAddTodo = () => {
    addObj(text);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDel = (id) => {
    delObj(id);
  };
  return (
    <div>
      <h1>Todo {arr2.length}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {arr2.map((item, index) => (
        <li key={index}>
          {item.title}
          <button onClick={() => handleDel(item.id)}>Del</button>
        </li>
      ))}
    </div>
  );
};

export default Section4;
