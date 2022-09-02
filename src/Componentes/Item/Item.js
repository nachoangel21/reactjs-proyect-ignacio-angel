import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import './Item.css'

export const Card = ({ zapatilla }) => {

    return (
        <div className="card">
            <div className="cardSection">
                <img src={zapatilla.img} alt="tarjeta" className='cardImg' />
            </div>
            <div className="cardSection">
                <h5 className="cardElement">{zapatilla.modelo}</h5>
                <h3 className="cardElement">{zapatilla.marca}</h3>
                <p className="cardElement">{zapatilla.precio}</p>
                <ItemCount initial={1} stock={5} className="cardElement" />
            </div>
        </div>
    )
}