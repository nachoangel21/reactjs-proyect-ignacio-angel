import React from 'react';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import airjordan1 from '../assest/airjordan1.jpg'
import airjordan2 from '../assest/airjordan2.jpg'
import airjordan3 from '../assest/airjordan3.jpg'
import airjordan4 from '../assest/airjordan4.jpg'
import { useParams } from 'react-router-dom';

const arregloProductos = [
    {
        id: 1,
        modelo: 'Air Jordan 1 High Blancas, Negras y Rojas',
        detalle: '...',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan1,
        categoria: 'snikers'
    },
    {
        id: 2,
        modelo: 'Air Jordan 1 High Celestes y Blancas',
        detalle: '...',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan2,
        categoria: 'snikers'
    },
    {
        id: 3,
        modelo: 'Air Jordan 1 High Blancas, Azules y Rojas',
        detalle: '...',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan3,
        categoria: 'snikers'
    },
    {
        id: 4,
        modelo: 'Air Jordan 1 High Blancas, Rosas y Rojas',
        detalle: '...',
        marca: 'Jordan',
        precio: '$ 50,000',
        img: airjordan4,
        categoria: 'snikers'
    }
]

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {tipoProductos} = useParams();
    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arregloProductos)
            }, 2000)
        })
    }
    useEffect(() => {
        const asincrona = async () => {
            try {
                const productoTraido = await getProduct();
                const newList = productoTraido.filter(product=>product.id === tipoProductos)
                setProduct(newList);
                console.log("productoTraido", productoTraido);
            } catch (error) {
                console.log(window.alert("Hubo un error"))
            }
        }
        asincrona()
    }, [])


    return (
        
            <div className='ItemDetailContainer'>
                {
                    product.map((product) => {
                        return (
                            <ItemDetail key={product} product={product} />
                        )
                    })
                }
            </div>
        
    )
}