import React from 'react'
import "./UserInput.css"

function UserInput() {
  return (   
    <div className="wordle">
    <form className="user-form">
    <label>        
        <input className="user-input" type="text" placeholder='Gissa här!' />
    </label>
    <button className="user-btn" type="submit">OK!</button>
    </form>
    <h1>&#128526;</h1>
      

</div>

  )
}

export default UserInput