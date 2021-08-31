import RicksGrid from '../src/Components/RicksGrid';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detalle from './Components/Detalle';
import { Landing } from './Components/Landing';

export default function App() {
  return (
    <Router>
      <header>
        <Link to='/'>
          <h1 className={styles.h2}>HOME</h1>
        </Link>
        {/* <div>Hola</div> */}
        <br></br>
      </header>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/personajes/:personajesId">
            <Detalle />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}