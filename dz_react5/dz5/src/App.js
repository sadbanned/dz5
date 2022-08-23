import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "white" : "grey" }}>On</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <span style={{ color: darkMode ? "white" : "black" }}>Off</span>
      </div>
      <div>
        <h1>your mode is {darkMode ? "Dark" : "Light"} </h1>
      </div>
    </div>
  );
}

