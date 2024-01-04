import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { Technologia } from './Technologia';
import { Prodotti } from './Prodotti';
import { Contatti } from './Contatti';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" сomponent={Technologia} />
          <Route path="/prodotti" сomponent={Prodotti} />
          <Route path="/contatti" сomponent={Contatti} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
