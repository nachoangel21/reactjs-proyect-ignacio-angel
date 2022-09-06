import React from 'react';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            },2000)
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
        <ItemDetail producto={product} />
    );
}