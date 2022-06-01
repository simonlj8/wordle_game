import Config from "./Config";

const GameConfig = ({setGameState, isUnique, setIsUnique, WordLength, setWordLength}) => {

    return (
        <div>        
        <Config 
        setGameState={setGameState}
        isUnique={isUnique}
        setIsUnique={setIsUnique}
        WordLength={WordLength}
        setWordLength={setWordLength}
        />
    </div>
    );
  
};

export default GameConfig;