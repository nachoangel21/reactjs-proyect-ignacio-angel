
import './App.css';
import Navbar from './Componentes/NavBar/Navbar'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner'
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <section>
        <ItemListConteiner greeting="SNICKERS"></ItemListConteiner>
      </section>
      <footer>
        <p>Este es el pie</p>
      </footer>
    </div>
  );
}

export default App;
