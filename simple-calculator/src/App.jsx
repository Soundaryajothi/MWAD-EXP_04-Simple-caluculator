import React from "react";
import Calculator from "./Calculator";
import "./App.css";

function App() {
  return (
    <div 
      className="App" 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        background: "linear-gradient(to right, #667eea, #764ba2)", 
        margin: 0,
        padding: 0
      }}
    >
      <Calculator />
    </div>
  );
}

export default App;
