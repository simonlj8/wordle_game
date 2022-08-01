import Navbar from './components/Navbar/Navbar';
import Config from './components/Config/Config';
import React, { useState, useEffect } from 'react';
import Game from './components/Game/Game'
import './App.css';

function App() {
  const [GameState, setGameState] = useState("config");
  const [WordLength, setWordLength] = useState(5);
  const [isUnique, setIsUnique] = useState(false);
  const [guess, setGuess] = useState([]);
  const [correctWord, setCorrectWord] = useState('');


  const HandleSubmitConfig = async (unique, length) => {
    const res = await fetch(`http://localhost:5080/api/word/${length}/${unique}`);
    const data = await res.json();
    setCorrectWord(data.word);
    console.log(data.word)
    setGuess([])
    setGameState("play");
    return;
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
        <Game correctWord={correctWord}
          isUnique={isUnique}
          setIsUnique={setIsUnique}
          WordLength={WordLength}
          setWordLength={setWordLength}
        />
      </div>
    );
  }

  else if (GameState === "start") {
    return (
      <div className='App'>
        <Navbar />
      </div>
    )
  }
}


export default App;
