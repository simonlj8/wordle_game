import './Config.css'

function Config({ WordLength, setWordLength, setIsUnique, isUnique, HandleSubmitConfig }) {

    function HandleSubmit(e) {
        e.preventDefault();
        HandleSubmitConfig(isUnique, WordLength);
    }

   
    return (
        <>
            <div>
            <h2>
                <p>Välj hur många bokstäver och om orden ska ha unika<br></br> eller tillåta samma bokstav flera gånger</p></h2>
            </div>
            <form onSubmit={HandleSubmit}>
            <h3>
                <label>Välj hur många bokstäver du vill spela med: </label>
                <select className="styled-select"
                    value={WordLength}
                    onChange={(e) => setWordLength(parseInt(e.target.value))}>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>                  
                </select>
                </h3>
                <br />
                <br />
                <div className='input-container'>
                    <input
                        className='styled-input'
                        type="radio"
                        value={isUnique}
                        onChange={() => setIsUnique(false)}
                        checked={!isUnique}
                    />
                    Tillåt samma bokstäver flera gånger.
                    <br />
                    <input
                        className='styled-input'
                        type="radio"
                        value={isUnique}
                        onChange={() => setIsUnique(true)}
                        checked={isUnique}
                    />
                    Endast unika bokstäver.
                </div>
                <button type="submit">Starta spel!</button>
            </form>
        </>
    );
}

export default Config;