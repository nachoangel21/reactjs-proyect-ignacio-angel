import './Navbar.css'
import Carrito from '../Carrito/Carrito'
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar">
                <a className="navElement" src="#">SNIKERS</a>
                <a className="navElement" src="#">SHIRTS</a>
                <img className="navElement logo" src="/Componentes/imagenes/logopoppa.png" alt="logo" />
                <a className="navElement" src="#">CAPS</a>
                <a className="navElement" src="#">HOODIES</a>
            </div>
            <Carrito></Carrito>
        </div>
    )
}

export default Navbar;