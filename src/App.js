
import './App.css';
import Navbar from './Componentes/NavBar/Navbar';
import { ItemList } from './Componentes/ItemList/ItemList';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<ItemList/>}/>
            <Route path='/productos/:tipoProductos' element={<ItemList/>}/>
            <Route path='/productos/:tipoProductos' element={<ItemList/>}/>
            <Route path='/productos/:tipoProductos' element={<ItemList/>}/>
            <Route path='/productos/:tipoProductos' element={<ItemList/>}/>
            <Route path='/ptoducto/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </header>
        <section>
          <ItemList />
        </section>
        <ItemDetailContainer />
        <footer>
          <p>Este es el pie</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
