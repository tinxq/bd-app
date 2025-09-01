import React, { useState } from "react";
import "./App.css";

function CenterBox() {
  const [choice, setChoice] = useState(null); // null، "yes" أو "no"
  const handleBack = () => setChoice(null);
  const handleYes = () => setChoice("yes");
  const handleNo = () => setChoice("no");

  return (
    <div className="box">
      {choice === null && (
        <>
          <img src="/photo/12.jpg" alt="صورة" />
          <div className="buttons">
            <button className="yes" onClick={handleYes}>accept it the letter </button>
            <button className="no" onClick={handleNo}>No</button>
          </div>
        </>
      )}

      {choice === "yes" && (
        <div className="result">
          <img src="/photo/yes.JPG" alt="Yes Image" />
          <p>Happy Birthday ****I hope your day is full of laughter fun joy and all the things you love May this year bring you endless happiness amazing adventures great memories and all the success and love you deserve I hope you get to celebrate with the people who make you happiest and that every moment of your day is as special as you are You are such an amazing friend and I am so grateful to have you in my life Cheers to another year of fun exciting experiences growth and unforgettable moments May all your dreams come true and may you always smile and be surrounded by love and positivity</p>
        </div>
      )}

      {choice === "no" && (
        <div className="result">
          <img src="/photo/no.jpg" alt="No Image" />
          <p>do you hate me bro ? </p>
          <button className="back" onClick={handleBack}>back</button>
        </div>
      )}
    </div>
  );
}

export default CenterBox;