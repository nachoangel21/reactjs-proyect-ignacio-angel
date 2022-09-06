import React, { useEffect, useState } from 'react'
import airjordan1 from '../assest/airjordan1.jpg'
import './ItemDetail.css'


export const ItemDetail = ({ item }) => {
    return (
        <div className='itemDetailCard'>
            <div className='section1'>
                <img className='img' src= {airjordan1}></img>
            </div>
            <div className='section2'>    
                <h3>Air Jordan 1 High Blancas, Negras y Rojas</h3>
                <p>lorem ipsum...</p>
                <p>$50,000</p>
            </div>
        </div>
    );

}