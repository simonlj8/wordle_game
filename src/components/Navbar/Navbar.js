import './Navbar.css';


//class Navbar extends Component {

//   render() {
function Navbar() {
    return (
        <>
            <div className="header" style={{ fontSize: '3.5em' }}> ๐ ๐พ ๐ ๐ณ ๐ป ๐ด ๐
            </div>
            <div>
                <nav className="Navbar">
                    <ul>
                        <li>
                            <a href="/" className='game'> Spela </a>
                        </li>
                        <li>
                            <a href="http://localhost:5080/api/highscore" className="highscore"> Poรคnglista </a>
                        </li>
                        <li>
                            <a href="http://localhost:5080/api/info" className="info"> Information </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;