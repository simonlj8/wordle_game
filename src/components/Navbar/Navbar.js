import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {


    render() {
       return ( 
           <>       
        <div className="header" style={{fontSize:'3.5em'}}> 🆆 🅾 🆁 🅳 🅻 🅴 🆁
         </div>      
        <div>  
        <nav className="Navbar">
        <ul>
            <li>
                <a href="/" className='game'> Spela </a>
            </li>
            <li>
                <a href="/api/highscore" className="highscore"> Poänglista </a>
            </li>
            <li>
                <a href="/api/info" className="info"> Information </a>
            </li>
        </ul>
    </nav>  
    </div> 
    </>
       )}
}

export default Navbar;