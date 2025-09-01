

import React, { useState } from "react";
import "./App.css";
import photo12 from "./assets/12.GIF";   
import yesImg from "./assets/yes.JPG";  
import noImg from "./assets/no.JPG";    

function CenterBox() {
  const [choice, setChoice] = useState(null); 

  const handleBack = () => setChoice(null);
  const handleYes = () => setChoice("yes");
  const handleNo = () => setChoice("no");

  return (
    <div className="box">
      {choice === null && (
        <>
          <img src={photo12} alt="Greeting card" />
          <div className="buttons">
            <button className="yes" onClick={handleYes}>
              accept the letter
            </button>
            <button className="no" onClick={handleNo}>
              No
            </button>
          </div>
        </>
      )}

      {choice === "yes" && (
        <div className="result">
          <img src={yesImg} alt="Happy celebration" />
          <p>
            happy birthday
          </p>
          <button className="back" onClick={handleBack}>
            back
          </button>
        </div>
        
      )}

      {choice === "no" && (
        <div className="result">
          <img src={noImg} alt="Choice No" />
          <p>do you hate me bro?</p>
          <button className="back" onClick={handleBack}>
            back
          </button>
        </div>
      )}
    </div>
  );
}

export default CenterBox;
