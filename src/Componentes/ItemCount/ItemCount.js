import {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState (initial)
    

    const sumarUno = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
        else (window.alert("No hay mas stock"));  
    }    
 
    
    const restarUno = () => {
        if (contador > initial){
            setContador(contador - 1)
        }
        else (window.alert("No se puede tener menos de un producto"))
    }
    
    
        return(
        <div className='buttons'>
            <div className='button'>
                <button onClick={sumarUno}>+</button><span>{contador}</span><button onClick={restarUno}>-</button>
            </div>
            <div className='button'>
                <button onClick={() => (onAdd(contador))}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;