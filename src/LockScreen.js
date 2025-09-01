import React, { useState } from "react";
import "./App.css";

function LockScreen({ onUnlock }) {
  const [enteredPin, setEnteredPin] = useState("");
  const correctPin = "1234";

  const handleNumberClick = (num) => {
    if (enteredPin.length < 4) {
      const newPin = enteredPin + num;
      setEnteredPin(newPin);

      if (newPin.length === 4) {
        if (newPin === correctPin) {
          onUnlock();
        } else {
          const dots = document.querySelector(".pin-dots");
          dots.classList.add("shake");
          setTimeout(() => dots.classList.remove("shake"), 500);
          setEnteredPin("");
        }
      }
    }
  };

  const handleDelete = () => {
    setEnteredPin(enteredPin.slice(0, -1));
  };

  return (
    <div className="box">
      <h2 style={{ color: "#35031c" }}> password</h2>

      <div className="pin-dots">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={enteredPin[i] ? "filled" : ""}></span>
        ))}
      </div>

      <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "del", 0].map((key, i) => (
          <button
            key={i}
            className="key"
            onClick={() =>
              key === "del" ? handleDelete() : handleNumberClick(key)
            }
          >
            {key === "del" ? "⌫" : key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LockScreen;
