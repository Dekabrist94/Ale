import React from 'react';
import { ProdottiSlider } from './Components/ProdottiSlider';
import { Container } from 'react-bootstrap';


const Prodotti = () => {
  return (
    <Container style={{ marginTop: '15rem' }}>
     <ProdottiSlider/>
    </Container>
  );
};

export default Prodotti;
