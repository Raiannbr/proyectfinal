//importar todo lo que necesitamos
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

//importamos componentes
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import Categories from "./components/Categories";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path = '/' component = { ItemListContainer }/>
            <Route exact path = {'./Productos/Categoria/:categoriaByID'} component = {Categories}/>
        </Switch>

        {/* Cualquier url que no este escrita nos redicciona a ./ */}
        <Redirect to = '/'/>

      </BrowserRouter>
    </div>
  );
}

export default App;
