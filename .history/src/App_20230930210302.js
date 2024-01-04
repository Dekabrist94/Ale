import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Заменил Switch на Routes

import { Home } from './Home';
import { Technologia } from './Technologia';
import { Prodotti } from './Prodotti';
import { Contatti } from './Contatti';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          {' '}
          {/* Заменил Switch на Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/technologia" element={<Technologia />} />{' '}
          {/* Используйте element для рендеринга компонентов */}
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
