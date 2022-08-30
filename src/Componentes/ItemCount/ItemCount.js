import {useState,  useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState ({initial})
    
    useEffect(() => {
        console.log("1er renderizado")
    })
   

    useEffect(() => {
        console.log("2do renderizado")
    })

    const sumarUno = () => {
        setContador() 
            if (contador < {stock}, 1++);
            else (window.alert("No hay mas stock"));  
    }    

    useEffect(() => {
        console.log("3er renderizado");
    })
    
    const restarUno = () => {
        setContador()
            if (contador > {initial}, 1--);
            else (window.alert("No se puede tener menos de un producto"))
    }
    
    
        return(
        <div>
            <button onClick={sumarUno}>+</button><span>{contador}</span><button onClick={restarUno}>-</button>
            <p>Cantidad de productos</p>
        </div>
    )
}