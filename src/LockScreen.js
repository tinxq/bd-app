import React, { useState } from "react";
import "./App.css";

function LockScreen({ onUnlock }) {
  const [enteredPin, setEnteredPin] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [hint, setHint] = useState("");
  const correctPin = "93921"; // كلمة السر 5 أرقام

  const hints = [
    " hint 1: the first number is 9 ",
   "hint 2 : Related to you",
   "hint 3 : I’m narcissistic so it relates to me too "
  ];

  const handleNumberClick = (num) => {
    if (enteredPin.length < 5) {
      const newPin = enteredPin + num;
      setEnteredPin(newPin);

      if (newPin.length === 5) {
        if (newPin === correctPin) {
          onUnlock();
          setHint(""); // اختفاء الهينت بعد النجاح
        } else {
          const dots = document.querySelector(".pin-dots");
          dots.classList.add("shake");
          setTimeout(() => dots.classList.remove("shake"), 500);

          const newWrongCount = wrongCount + 1;
          setWrongCount(newWrongCount);
          setEnteredPin("");

          // عرض الهينت كل 4 محاولات خاطئة، وبحد أقصى 3 هينتات
          if (newWrongCount % 4 === 0) {
            const hintIndex = Math.floor(newWrongCount / 4) - 1;
            if (hintIndex < hints.length) {
              setHint(hints[hintIndex]);
            }
          }
        }
      }
    }
  };

  const handleDelete = () => {
    setEnteredPin(enteredPin.slice(0, -1));
  };

  return (
    <div className="box">
      <h2 style={{ color: "#35031c" }}>password</h2>

      <div className="pin-dots">
        {[0, 1, 2, 3, 4].map((i) => (
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

      {hint && <p className="hint">{hint}</p>} {/* يظهر الهينت هنا */}
    </div>
  );
}

export default LockScreen;