import Navbar from './components/Navbar/Navbar';
import Config from './components/Config/Config';
import UserInput from './components/Game/UserInput';
import React, { useState, useEffect } from 'react';
import Game from './components/Game/Game'
import './App.css';


function App() {
  const [GameState, setGameState] = useState("play");
  const [WordLength, setWordLength] = useState(4);
  const [isUnique, setIsUnique] = useState(true);
  const [Guess, setGuess] = useState([]);
  const [correctWord, setCorrectWord] = useState('');

  const HandleSubmitConfig = async () => {
    setGameState("play");

   
  }
 
  
 



  if (GameState === "config") {
    return (
      <div className="App">      
        <Navbar />
        <Config
        HandleSubmitConfig={HandleSubmitConfig}
        WordLength={WordLength}
        setWordLength={setWordLength}
        isUnique={isUnique}
        setIsUnique={setIsUnique} 
        setGameState={setGameState} />         
      </div>
    );
  }

  else if (GameState === "play") {
    return (
      <div className="App">
        <Navbar />         
        <UserInput /> 
        <Game correctWord={correctWord}/>          
      </div>
    );
  }
}


export default App;
