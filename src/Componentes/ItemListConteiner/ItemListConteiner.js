import React from 'react'
import { ItemList } from '../ItemList/ItemList'


function ItemListConteiner(props) {
   
    return (
        <div style={{background:'pink'}}>
            <h1>{props.greeting}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListConteiner;