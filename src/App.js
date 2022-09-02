
import './App.css';
import Navbar from './Componentes/NavBar/Navbar'
import {ItemList} from './Componentes/ItemList/ItemList'
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <section>
        <ItemList/>
      </section>
      <footer>
        <p>Este es el pie</p>
      </footer>
    </div>
  );
}

export default App;
