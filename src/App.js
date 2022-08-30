
import './App.css';
import Navbar from './Componentes/NavBar/Navbar'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner'
import ItemCount from './Componentes/ItemCount/ItemCount';
import {useState} from 'react';

function App() {
  const [numeroProductos, setNumeroProductos] = useState(0);
  const agregar = (productos) => {
    console.log("Productos agregados", productos)
    setNumeroProductos(productos);
  }

  
  return (
    <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <ItemCount stock={5} initial={1} onAdd={agregar}/>
        <ItemListConteiner greeting="Contador con boton"></ItemListConteiner>
    </div>
  );
}

export default App;
