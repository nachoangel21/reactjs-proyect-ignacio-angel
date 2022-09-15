import React, { useEffect, useState } from 'react';
import { Card } from '../Item/Item';
import airjordan1 from '../assest/airjordan1.jpg';
import airjordan2 from '../assest/airjordan2.jpg';
import airjordan3 from '../assest/airjordan3.jpg';
import airjordan4 from '../assest/airjordan4.jpg';
import './ItemList.css';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer' 

const arregloProductos = [
    {
        id: 1,
        modelo: 'Air Jordan 1 High Blancas, Negras y Rojas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan1,
        categoria: 'snikers'
    },
    {
        id: 2,
        modelo: 'Air Jordan 1 High Celestes y Blancas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan2,
        categoria: 'snikers'
    },
    {
        id: 3,
        modelo: 'Air Jordan 1 High Blancas, Azules y Rojas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan3,
        categoria: 'snikers'
    },
    {
        id: 4,
        modelo: 'Air Jordan 1 High Blancas, Rosas y Rojas',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan4,
        categoria: 'snikers'
    }
]

export const ItemList = () => {
    const { tipoProductos } = useParams();
    const [productos, setProductos] = useState([]);

    const traerProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arregloProductos)
            }, 3000);
        })
    }

    useEffect(() => {
        const funcionAsincrona = async () => {
            try {
                const listado = await traerProductos();
                const nuevaLista = listado.filter(producto => producto.categoria === tipoProductos);
                setProductos(nuevaLista);
            } catch (error) {
                console.log(window.alert("Hubo un error."))
            }
        }
        funcionAsincrona();
    }, [tipoProductos])

    return (
        <BrowserRouter>
            <div className='container'>
                <div className='cardsContainer'>
                    {
                        productos.map((producto) => {
                            return (
                                <Card producto={producto} />
                            )
                        })
                    }
                </div>
                <Routes>
                    <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
                </Routes>
            </div>

        </BrowserRouter>
    )
}