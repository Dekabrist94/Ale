import React from 'react';
import NaviBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Заменил Switch на Routes
import Block from './Components/Block';
import { Home } from './Home';
import { Technologia } from './Technologia';
import { Prodotti } from './Prodotti';
import { Contatti } from './Contatti';
import Parallax from './Components/Parallax';

function App() {
  return (
    <>
      <Parallax />
      <Router>
        <NaviBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologia" element={<Technologia />} />

          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Router>

      <Block />
    </>
  );
}

export default App;
