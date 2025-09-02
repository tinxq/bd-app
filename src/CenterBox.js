

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
     <p> happy birthday wishing you a year and a life full of success thank you for always being there for me you make me laugh so much and smile all the time you are so funny smart and amazing I love how you are always yourself and how you make every little thing better I also really appreciate how you always support me I hope your day is full of fun laughter good vibes and everything you love most you are honestly the best and I am so lucky to have you around
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
