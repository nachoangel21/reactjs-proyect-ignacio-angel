import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { NavLink } from 'react-router-dom';

export const Card = ({ producto }) => {

    return (
        <div className="card">
            <div className="cardSection">
                <img src={producto.img} alt="tarjeta" className='cardImg' />
            </div>
            <div className="cardSection">
                <h5 className="cardElement">{producto.modelo}</h5>
                <h3 className="cardElement">{producto.marca}</h3>
                <p className="cardElement">{producto.precio}</p>
                <ItemCount initial={1} stock={5} className="cardElement" />
                <NavLink to="/productos/id">
                    <button>Ver Detalle</button>
                </NavLink>
            </div>
        </div>
    )
}