import React from 'react';

import pneumatica from './img/pneumatica.png'
import automotive from './img/automotive.png'
import olio from './img/Oliodinamica.png'
import varia from './img/varia.png'

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


// export const Prodotti = () => {
//   return <>
//   <Container style={{paddingTop:'25rem'}}>
// <img src={pneumatica} alt='pneumatica'/>
// <img src={automotive} alt='automotive'/>
// <img src={olio} alt='oliodinamica'/>
// <img src={varia} alt='varia'/>

//   </Container>

export const Prodotti = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={pneumatica} alt='pneumatica'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={automotive} alt='automotive'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={olio} alt='oliodinamica'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={varia} alt='varia'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Prodotti;
