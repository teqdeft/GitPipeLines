import React from "react";
import { useState } from "react";

const About = () => {
     const [count, setCount] = useState(0);
  return (
    <>
      <div>About</div>
      <h1>CI\CD Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <span>
          {" "}
          {count}
          {"   "}
        </span>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
      <p className="read-the-docs">Use Counter</p>
    </>
  );
};

export default About;
