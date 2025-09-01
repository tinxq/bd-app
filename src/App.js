import React, { useState } from "react";
import LockScreen from "./LockScreen";
import CenterBox from "./CenterBox";
import "./App.css";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <div className="app-container">
      {isAuthorized ? (
        <CenterBox />
      ) : (
        <LockScreen onUnlock={() => setIsAuthorized(true)} />
      )}
    </div>
  );
}

export default App;
