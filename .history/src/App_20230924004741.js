import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Technologia } from './Technologia';
import { Prodotti } from './Prodotti';
import { Contatti } from './Contatti';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" Component={Technologia} />
          <Route path="/prodotti" Component={Prodotti} />
          <Route path="/contatti" Component={Contatti} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
