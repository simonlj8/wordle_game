import Navbar from './components/Navbar/Navbar.js';
import Config from './components/Config/Config.js';
import UserInput from './components/Game/UserInput.js';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [GameState, setGameState] = useState("play");

  if (GameState === "config") {
    return (
      <div className="App">      
        <Navbar />
        <Config />         
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

  /*
  return (
    <div className="App">           
         <Navbar />
         <Config />              
    </div>
  );
}*/

export default App;
