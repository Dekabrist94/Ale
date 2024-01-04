import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Technologia from './Technologia'; // Изменил импорт
import Prodotti from './Prodotti'; // Изменил импорт
import Contatti from './Contatti'; // Изменил импорт

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Technologia} />{' '}
          {/* Изменил "Component" на "component" */}
          <Route path="/prodotti" component={Prodotti} /> {/* Изменил "Component" на "component" */}
          <Route path="/contatti" component={Contatti} /> {/* Изменил "Component" на "component" */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
