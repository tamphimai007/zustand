import React, { useState } from "react";
import useStore from "../store/tam-store";

const Section3 = () => {
  const [text, setText] = useState('')  
  const { arr1, addTodo, delTodo } = useStore((state) => ({
    arr1: state.arr1,
    addTodo: state.addTodo,
    delTodo: state.delTodo
  }));

  const handleAddTodo = () => {
    addTodo(text);
  };
  const handleChange = (e) =>{
    setText(e.target.value)
  }
  const handleDelTodo = (idx)=>{
    delTodo(idx)
  }

  return (
    <div>
      Todo {arr1.length}
      <input type="text" onChange={handleChange}/>
      <p>
        <button onClick={handleAddTodo}>Add</button>
      </p>
      {arr1.map((item, index) => (
        <li key={index}>{item} <button onClick={()=>handleDelTodo(index)}>Del</button></li>
      ))}
    </div>
  );
};

export default Section3;
