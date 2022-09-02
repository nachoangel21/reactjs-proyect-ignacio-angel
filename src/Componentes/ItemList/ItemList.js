import React, { useEffect, useState } from 'react'
import { Card } from '../Item/Item'
import airjordan1 from '../assest/airjordan1.jpg'
import airjordan2 from '../assest/airjordan2.jpg'
import airjordan3 from '../assest/airjordan3.jpg'
import airjordan4 from '../assest/airjordan4.jpg'
import './ItemList.css';

const arregloZapatillas = [
    {
        modelo: 'Air Jordan 1 High Blancas, Negras y Rojas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan1
    },
    {
        modelo: 'Air Jordan 1 High Celestes y Blancas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan2
    },
    {
        modelo: 'Air Jordan 1 High Blancas, Azules y Rojas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan3
    },
    {
        modelo: 'Air Jordan 1 High Blancas, Rosas y Rojas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan4
    }
]

export const ItemList = () => {

    const [zapatillas, setZapatillas] = useState([]);

    const traerZapatillas = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arregloZapatillas)
            }, 3000);
        })
    }

    useEffect(() => {
        const funcionAsincrona = async () => {
            try {
                const listado = await traerZapatillas();
                setZapatillas(listado);
                console.log('listado', listado);
            } catch (error) {
                console.log(window.alert("Hubo un error."))
            }
        }
        funcionAsincrona();
    }, [])

    return (
        <div className='container'>
            <div className='cardsContainer'>
                {
                    zapatillas.map((zapatilla) => {
                        return(
                            <Card zapatilla={zapatilla}/>
                        )
                    })
                }
            </div>
        </div>
    )
}