import './Navbar.css';
import Carrito from '../Carrito/Carrito';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav">
                <NavLink to="/productos/snikers" className={({isActive})=>isActive ? "claseActive": "claseInactive"}>SNIKERS</NavLink>
                <NavLink to="/productos/shirts" className={({isActive})=>isActive ? "claseActive": "claseInactive"}>SHIRTS</NavLink>
                <NavLink to="/home">
                    <div>
                        <img className="logo navElement" src="./logopoppa.jpg" alt="logo" />
                    </div>
                </NavLink>
                <NavLink to="/productos/caps" className={({isActive})=>isActive ? "claseActive": "claseInactive"}>CAPS</NavLink>
                <NavLink to="/productos/hoodies" className={({isActive})=>isActive ? "claseActive": "claseInactive"}>HOODIES</NavLink>
            </div>
            <div className="navCart">
                <Carrito></Carrito>
            </div>
        </div>
    )
}

export default Navbar;