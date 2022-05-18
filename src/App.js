import Navbar from './components/Navbar/Navbar.js';
import Config from './components/Config/Config.js';
import UserInput from './components/Game/UserInput.js';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [GameState, setGameState] = useState("config");
  const [WordLength, setWordLength] = useState(4);
  const [isUnique, setIsUnique] = useState("false")

  const HandleSubmit = async () => {
    setGameState("play");
  }
 

  if (GameState === "config") {
    return (
      <div className="App">      
        <Navbar />
        <Config
        HandleSubmit={HandleSubmit}
        WordLength={WordLength}
        setWordLength={setWordLength}
        isUnique={isUnique}
        setIsUnique={setIsUnique} />         
      </div>
    );
  }

  else if (GameState === "play") {
    return (
      <div className="App">
        <Navbar />         
        <UserInput />           
      </div>
    );
  }
}


export default App;
