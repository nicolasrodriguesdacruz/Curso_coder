import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting={'Le damos la bienvenida a HoopsKicks'} greeting2={'El sitio #1 para comprar zapatillas de baloncesto'}/>
      </div>
  );
}

export default App;
