// rafce
import React from "react";
import useStore from "../store/tam-store";
const Section2 = () => {
  const { value, incNum, decNum } = useStore((state) => ({
    value: state.value,
    incNum: state.incNum,
    decNum: state.decNum,
  }));

  const handleIncNum = () => {
    incNum();
  };
  const handleDecNum = () =>{
    decNum();
  }

  return (
    <div>
      Value : {value}
      <p>
        <button onClick={handleIncNum}>+ Num</button>
        <button onClick={handleDecNum}>- Num</button>
      </p>
    </div>
  );
};

export default Section2;
