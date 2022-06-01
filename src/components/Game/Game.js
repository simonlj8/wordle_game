import { useState } from "react";
import './UserInput.css'
import { useEffect } from 'react'
import Config from "../Config/Config";

function Game({ correctWord, isUnique }) {
    //const [startTime] = useState(new Date());
    const [gameState, setGameState] = useState("play");
    //const [endTime, setEndtime] = useState(null);
    const [inputText, setInputText] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [name, setName] = useState("");


    const handleKeyUp = (keyCode) => {
        if (keyCode === "Enter") {
            setGuesses([...guesses, inputText]);
            setInputText("");
            if (inputText === correctWord) {
                setGameState("won");

            }
        }
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        const highscore = {
            correctWord,
            guesses,
            name,

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

        return (
            <div className="Game">
                <h1>Du vann!</h1>
                <p>Det rätta ordet var: {guesses.at(-1)}</p>
                <h2>Lägg till i poänglista</h2>
                <form onSubmit={handleSubmit}>
                    <input className="user-input"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
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
            <input className="user-input"
                placeholder="Gissa här!"
                value={inputText}
                onChange={(ev) => setInputText(ev.target.value)}
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