import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (output === "Error" || output === Infinity) {
      setInput("");
      setOutput("");
    }

    setInput((prevInput) => prevInput + value);
  };

  const handleEqual = () => {
    try {
      if (input === "") {
        setOutput("Error");
      }else{
          setOutput(eval(input));
      }
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div>{output}</div>
      <div className="buttons-container">
        <div>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
