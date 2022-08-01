import { useState } from "react";
import './UserInput.css'
import CountUp from "react-countup";
import "../../App.css"

function Game({ correctWord, isUnique, WordLength }) {
    const [startTime] = useState(new Date());
    const [gameState, setGameState] = useState("play");
    const [endTime, setEndtime] = useState(null)
    const [inputText, setInputText] = useState("");
    const [guesses, setGuesses] = useState([]);
    const [name, setName] = useState("");
    // const [guessResult, SetGuessResult] = useState([]);
    const [guessesResults, SetGuessesResult] = useState([]);

    let correctLetters = correctWord.split("").map((letter, index) => ({
        ...index,
        letter: letter,
        color: "boxcolor",
    }));

    let time = ""

    const checkGuess = ev => {
        ev.preventDefault();
        setGuesses([
            ...guesses,
            inputText,
        ]);
        setInputText("")

        if (inputText === correctWord) {
            setGameState("won");
            setEndtime(new Date());
        }

        else {
            let letters = inputText.split("").map((letter, index) => ({
                ...index,
                letter: letter,
                status: "incorrect",
            }));

            if (letters.length !== correctLetters.length) {
                window.alert("Du måste ha " + correctLetters.length + " bokstäver");
            }

            else {
                for (let i = 0; i < letters.length; i++) {
                    if (letters[i].letter === correctLetters[i].letter) {
                        letters[i].status = "correct"
                        correctLetters[i].letter = "check"
                    };
                };
                letters.forEach(element => {
                    for (let j = 0; j < letters.length; j++) {
                        if (element.status === "incorrect") {
                            if (element.letter === correctLetters[j].letter) {
                                element.status = "missplaced"
                                correctLetters[j].letter = "check"
                            };
                        };
                    };
                });

                SetGuessesResult([...guessesResults,                    
                        {guessResult: letters}                    
                ]);
            };
        }
    };

    const showGuessResult = guessesResults.slice(0).reverse().map((nestled, i) => {
            return (
                <li key={i}>
                    {nestled.guessResult.map((letter, j) => {
                        return (
                            <span key={j} className={letter.status}>
                                {letter.letter}
                            </span>
                        )
                    })}
                </li>)
        });

    const handleSubmitHigscore = async (ev) => {
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
                <form onSubmit={handleSubmitHigscore}>
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
            <div>
                <CountUp className="countUp" end={1350} duration="1350" />
            </div>
            
            <div className="wordle">
                <form onSubmit={checkGuess}>
                    <input
                        className="user-input"
                        placeholder="Gissa här!"
                        value={inputText}
                        required
                        maxLength={WordLength}
                        onChange={(ev) => setInputText(ev.target.value.toUpperCase())}
                    //onKeyUp={(ev) => checkGuess(ev.code)}
                    />
                    <button className="user-btn" onClick={(ev) => checkGuess(ev)}>OK!</button>

                </form>                
                <div className="boxes">                
                <ul>{showGuessResult}</ul>                
            </div>
            </div>
          
        </div>
    );
}
export default Game;