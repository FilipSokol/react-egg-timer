import React, { useState, useEffect } from "react";
import eggicon from "../images/eggicon.svg";
import beep from "../audio/beep.wav";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState("");

  const playBeep = (beepsound) => {
    beepsound = new Audio(beep);
    beepsound.play();
  };

  const AlertTime = () => {
    if (timeLeft === 0) {
      playBeep();
      return <p>Done</p>;
    } else {
      return true;
    }
  };

  const displayTimeLeft = (minutes, seconds) => {
    minutes = parseInt(timeLeft / 60, 10);
    seconds = parseInt(timeLeft % 60, 10);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="timer">
      <div className="eggicon-section">
        <img src={eggicon} alt="eggicon" />
        <AlertTime />
      </div>
      <div className="displaytime-section">{displayTimeLeft(timeLeft)}</div>
      <hr />
      <div className="items-section">
        <div>
          <p>4 minutes</p>
          <button onClick={() => setTimeLeft(240)}>soft boiled</button>
        </div>
        <div>
          <p>7 minutes</p>
          <button onClick={() => setTimeLeft(420)}>creamy hard boiled</button>
        </div>
        <div>
          <p>9 minutes</p>
          <button onClick={() => setTimeLeft(540)}>hard boiled</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
