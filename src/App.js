import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/navegador/NavBar';
import Alianza from './components/paginas/Alianza';
import Productos from './components/paginas/Productos';


function App() {
  return (
    <div className="App">
      
        <Router>
          <NavBar/>
        </Router>

    </div>
  );
}

export default App;
