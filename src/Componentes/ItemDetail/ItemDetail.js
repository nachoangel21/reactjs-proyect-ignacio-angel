import React, { useEffect, useState } from 'react'
import airjordan1 from '../assest/airjordan1.jpg'
import './ItemDetail.css'


export const ItemDetail = ({ product }) => {
    return (
        <div className='itemDetailCard' key={product.modelo}>
            <div className='section1'>
                <img className='img' src= {product.img}></img>
            </div>
            <div className='section2'>    
                <h3>{product.modelo}</h3>
                <p>{product.detalle}</p>
                <p>{product.precio}</p>
            </div>
        </div>
    );

}