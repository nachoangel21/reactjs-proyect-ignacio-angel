import './Navbar.css'
import Carrito from '../Carrito/Carrito'
function Navbar() {
    return (
        <div className="navbar">
            <div className="nav">
                <a className="navElement" src="#">SNIKERS</a>
                <a className="navElement" src="#">SHIRTS</a>
                <img className="logo navElement" src="./logopoppa.jpg" alt="logo" />
                <a className="navElement" src="#">CAPS</a>
                <a className="navElement" src="#">HOODIES</a>
            </div>
            <div className="navCart">
                <Carrito></Carrito>
            </div>
        </div>
    )
}

export default Navbar;