import React from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Egg Timer</h1>
        </header>
        <div className="timer-container">
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;
