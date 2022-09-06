import React from 'react';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import airjordan1 from '../assest/airjordan1.jpg'
import airjordan2 from '../assest/airjordan2.jpg'
import airjordan3 from '../assest/airjordan3.jpg'
import airjordan4 from '../assest/airjordan4.jpg'

const arregloZapatillas = [
    {
        id: 1,
        modelo: 'Air Jordan 1 High Blancas, Negras y Rojas',
        detalle: 'Familiares pero siempre frescas, las icónicas Air Jordan 1 están remasterizadas para la cultura actual de sneakerheads.',
        precio: '$ 50,000',
        img: airjordan1, 
    },
    {
        id: 2,
        modelo: 'Air Jordan 1 High Celestes y Blancas',
        detalle: 'Familiares pero siempre frescas, las icónicas Air Jordan 1 están remasterizadas para la cultura actual de sneakerheads.',
        precio: '$ 50,000',
        img: airjordan2, 
    },
    {
        id: 3,
        modelo: 'Air Jordan 1 High Blancas, Azules y Rojas',
        detalle: 'Familiares pero siempre frescas, las icónicas Air Jordan 1 están remasterizadas para la cultura actual de sneakerheads.',
        precio: '$ 50,000',
        img: airjordan3, 
    },
    {
        id: 4,
        modelo: 'Air Jordan 1 High Blancas, Rosas y Rojas',
        detalle: 'Familiares pero siempre frescas, las icónicas Air Jordan 1 están remasterizadas para la cultura actual de sneakerheads.',
        precio: '$ 50,000',
        img: airjordan4, 
    }
]


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arregloZapatillas)
            }, 2000)
        })
    }
    useEffect(() => {
        const asincrona = async () => {
            try {
                const productoTraido = await getProduct();
                setProduct(productoTraido);
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
                            return(
                                <ItemDetail key={product} product={product}/>
                            )
                        })
                    }
                </div>
        )
}