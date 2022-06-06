import Navbar from './components/Navbar/Navbar';
import Config from './components/Config/Config';
import React, { useState, useEffect } from 'react';
import Game from './components/Game/Game'
import './App.css';
import Compare from './components/Game/Compare';




function App() {
  const [GameState, setGameState] = useState("config");
  const [WordLength, setWordLength] = useState(5);
  const [isUnique, setIsUnique] = useState(false);
  const [guess, setGuess] = useState([]);
  const [correctWord, setCorrectWord] = useState('');
  //const [length, setLength] = useState(5);
 //const [unique, setUnique] = useState(true)
  //



  /*useEffect(() => {
     /* const loadWord = async (unique, length) => {
        //        
       //const res = await fetch(`http://localhost:5080/api/word?length=${length}&unique=${unique}`)
        const res = await fetch("http://localhost:5080/api/word/4/false");
        //const res = await fetch(`http://localhost:5080/api/word/${length}/${unique}`);
        
        //
      //const res = await fetch("http://localhost:5080/api/random_word/3/false");
     
      const data = await res.json();
      setCorrectWord(data.word);
      //console.log(data, "hej")
      return;

    };

   loadWord();
  }, []);*/

  //


  const HandleSubmitConfig = async (unique, length) => {

    //        
   // const res = await fetch(`http://localhost:5080/api/word?length=${length}&unique=${unique}`)
    //const res = await fetch("http://localhost:5080/api/word/4/false");
  const res = await fetch(`http://localhost:5080/api/word/${length}/${unique}`);   

    const data = await res.json();
    setCorrectWord(data.word);
    console.log(data.word, "hej")  
    

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
          //isUnique={isUnique}
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
          //unique={unique}
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
