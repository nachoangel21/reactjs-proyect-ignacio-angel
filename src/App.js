
import './App.css';
import Navbar from './Componentes/NavBar/Navbar'
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <ItemListConteiner greeting="Texto Provisional"></ItemListConteiner>
    </div>
  );
}

export default App;
