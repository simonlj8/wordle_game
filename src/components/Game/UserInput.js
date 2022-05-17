import React from 'react'

function UserInput() {
  return (   
    <div className="wordle">

    <label>
        Din gissning:
        <input className="userWord" type="text" />
    </label>
    <button className="userInput">OK!</button>
    <h1>&#128526;</h1>
    <ul>
        <span>
        </span>
    </ul>      

</div>

  )
}

export default UserInput