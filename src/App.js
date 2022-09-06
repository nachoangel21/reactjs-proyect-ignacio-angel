
import './App.css';
import Navbar from './Componentes/NavBar/Navbar'
import { ItemList } from './Componentes/ItemList/ItemList'
import { useState } from 'react';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <section>
        <ItemList/>
      </section>
        <ItemDetailContainer/>
      <footer>
        <p>Este es el pie</p>
      </footer>
    </div>
  );
}

export default App;
