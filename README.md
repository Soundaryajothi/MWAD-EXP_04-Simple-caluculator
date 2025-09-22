# MWAD-EXP_04-Simple-caluculator
## Date:21.09.2025
## NAME:SOUNDARYA J
## REG NO: 212223220108

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.
## PROGRAM:
## App.jsx
```
import React from "react";
import Calculator from "./Calculator";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "100vh", 
      background: "linear-gradient(to right, #667eea, #764ba2)" 
    }}>
      <Calculator />
    </div>
  );
}

export default App;

```
## Calculator.jsx
```
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
```
## Calculator.css
```
.calculator {
  width: 350px;
  margin: 50px auto;
  border-radius: 20px;
  overflow: hidden;
  background: #1e1e2f;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

.display {
  background: #2c2c44;
  color: #fff;
  font-size: 2.5rem;
  text-align: right;
  padding: 25px 20px;
  border-bottom: 2px solid #444;
  word-wrap: break-word;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
}

button {
  padding: 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px #999;
}

button:active {
  transform: translateY(4px);
  box-shadow: 0 2px #666;
}

.number {
  background: linear-gradient(145deg, #ffecd2, #fcb69f);
  color: #333;
}

.operator {
  background: linear-gradient(145deg, #4facfe, #00f2fe);
  color: #fff;
}

.function {
  background: linear-gradient(145deg, #ff4e50, #f9d423);
  color: #fff;
}

.equal {
  background: linear-gradient(145deg, #43e97b, #38f9d7);
  color: #fff;
}

.span-two {
  grid-column: span 2;
}

@media (max-width: 400px) {
  .calculator {
    width: 90%;
  }
  .display {
    font-size: 2rem;
  }
  button {
    font-size: 1.2rem;
    padding: 15px;
  }
}
````


## OUTPUT
<img width="1920" height="1080" alt="Screenshot 2025-09-21 225558" src="https://github.com/user-attachments/assets/dd4909bb-2f50-4962-8f68-31828d4b4d47" />

<img width="1920" height="1080" alt="Screenshot 2025-09-21 225614" src="https://github.com/user-attachments/assets/59883dd6-faa2-49d7-aa27-5fb569fdef37" />

<img width="1920" height="1080" alt="Screenshot 2025-09-21 225624" src="https://github.com/user-attachments/assets/af050935-8501-45a2-a597-bfd9ef9814e1" />


## RESULT
The program for developing a simple calculator in React.js is executed successfully.
