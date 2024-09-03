// rafce
import React, { useState } from "react";
import useStore from "../store/tam-store";


const Section1 = () => {
  const [text, setText] = useState("");
  // Step 2 Use Store
  const fname = useStore((state) => state.fname);
  const lname = useStore((c) => c.lname);
  const setName = useStore((state) => state.setName);

  const handleSetname = () => {
    setName(text);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Section1</h1>
      <p>
        Hello {fname} {lname}
      </p>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSetname}>Set Name</button>
    </div>
  );
};

export default Section1;
