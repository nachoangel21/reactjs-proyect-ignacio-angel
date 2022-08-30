import {ItemCount} from '../ItemCount/ItemCount'

function ItemListConteiner(props) {
    return (
        <div style={{background:'pink'}}>
            <h1>{props.greeting}</h1>
            <ItemCount stock={5} initial={1}>{onAdd}</ItemCount>
        </div>
    )
}

export default ItemListConteiner;