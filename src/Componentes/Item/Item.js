import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';

const Tarjeta = ({ zapatilla }) => {
    const [numeroProductos, setNumeroProductos] = useState(0);
    const agregar = (productos) => {
        console.log("Productos agregados", productos)
        setNumeroProductos(productos);
    }

    return (
        <div className='tarjeta'>
            <img src={zapatilla.img} alt="producto"></img>
            <h5>{zapatilla.modelo}</h5>
            <h3>{zapatilla.marca}</h3>
            <p>{zapatilla.precio}</p>
            <ItemCount stock={5} initial={1} onAdd={agregar} />
        </div>
    )
}

export default Tarjeta;