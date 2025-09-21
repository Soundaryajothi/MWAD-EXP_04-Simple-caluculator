import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={handleClear} className="btn function span-two">C</button>
        <button onClick={() => handleClick("/")} className="btn operator">÷</button>
        <button onClick={() => handleClick("*")} className="btn operator">×</button>

        <button onClick={() => handleClick("7")} className="btn number">7</button>
        <button onClick={() => handleClick("8")} className="btn number">8</button>
        <button onClick={() => handleClick("9")} className="btn number">9</button>
        <button onClick={() => handleClick("-")} className="btn operator">−</button>

        <button onClick={() => handleClick("4")} className="btn number">4</button>
        <button onClick={() => handleClick("5")} className="btn number">5</button>
        <button onClick={() => handleClick("6")} className="btn number">6</button>
        <button onClick={() => handleClick("+")} className="btn operator">+</button>

        <button onClick={() => handleClick("1")} className="btn number">1</button>
        <button onClick={() => handleClick("2")} className="btn number">2</button>
        <button onClick={() => handleClick("3")} className="btn number">3</button>
        <button onClick={handleEqual} className="btn equal span-two">=</button>

        <button onClick={() => handleClick("0")} className="btn number span-two">0</button>
        <button onClick={() => handleClick(".")} className="btn number">.</button>
      </div>
    </div>
  );
};

export default Calculator;
