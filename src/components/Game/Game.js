import { useState, useEffect } from "react";
import './UserInput.css'
import Config from "../Config/Config";
import CountUp from "react-countup";


function Game({ correctWord, isUnique, WordLength }) {
    const [startTime] = useState(new Date());
    const [gameState, setGameState] = useState("play");
    const [endTime, setEndtime] = useState(null)
    const [inputText, setInputText] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [name, setName] = useState("");
    const [guessResult, SetGuessResult] = useState([]); 


    let time = ""

    //


    const handleKeyUp = (keyCode) => {
        if (keyCode === "Enter") {
            setGuesses([
                ...guesses,
                inputText
            ]);
            setInputText("");
            if (inputText === correctWord) {
                setGameState("won");
                setEndtime(new Date());

            }
        }
    }


  
    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const highscore = {
            correctWord: correctWord,
            guesses: guesses.length,
            isUnique: isUnique,
            name: name,
            time: time,            
            length: correctWord.length,

        };

        await fetch("http://localhost:5080/api/highscore", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(highscore),

        });
        console.log(highscore)
        setGameState("end");
    };



    if (gameState === "won") {
        time = Math.round((endTime - startTime) / 1000)
        return (
            <div className="Game">
                <h1>Du vann!</h1>
                <p>Det rätta ordet var: {guesses.at(-1)}</p>
                <p>Tid: {time}</p>
                <p>Antal gissningar: {guesses.length}</p>
                <h2>Lägg till i poänglista</h2>
                <form onSubmit={handleSubmit}>
                    <input className="user-input"
                        value={name}
                        onChange={(ev) => setName(ev.target.value.toUpperCase())}
                        placeholder="Ditt namn"
                    />
                    <button className="user-btn" type="submit">OK!</button>
                </form>
            </div>
        );
    } else if (gameState === "end") {
        return (
            <div className="Game">
                <h1>Bra jobbat!</h1>
            </div>
        );
    }

    return (
        <div className="Game">
            <div className="counter">            
            <CountUp end={1500} duration="1400" />
            </div>
            <input className="user-input"
                placeholder="Gissa här!"
                value={inputText}
                onChange={(ev) => setInputText(ev.target.value.toUpperCase())}
                onKeyUp={(ev) => handleKeyUp(ev.code)}
            />
            <button className="user-btn" onClick={(ev) => handleKeyUp(ev.code)}>OK!</button>
            <ul>                
                {guesses.map((guess, index) => (
                    <li key={index}>{guess}</li>
                ))}
            </ul>
            <h1>&#128526;</h1>
        </div>


    );
}

export default Game;