import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router } from 'react-router-dom';

import { Technologia } from './Technologia';
import { Prodotti } from './Prodotti';
import { Contatti } from './Contatti';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route path="/" Component={Technologia} />
          <Route path="/" Component={Prodotti} />
          <Route path="/" Component={Contatti} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
