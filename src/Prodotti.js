import React from 'react';
import pneumatica from './img/pneumatica.png';
import automotive from './img/automotive.png';
import olio from './img/Oliodinamica.png';
import varia from './img/varia.png';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Prodotti = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel' style={{ maxWidth: '600px', margin: 'auto', paddingTop:'5rem'}}>
      <Carousel.Item>
        <img className="img-fluid" src={pneumatica} alt='pneumatica' />
        <Carousel.Caption style={{paddingTop:'2rem'}}>
          <h3 style={{color: 'black'}}>First slide label</h3>
          <p>dsldasjdjaskd</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid" src={automotive} alt='automotive' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>sdsdsdsdsdsdsd</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid" src={olio} alt='oliodinamica' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>fdfdfdfdfsf</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-fluid" src={varia} alt='varia' />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>fdfdfdfdfsf</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Prodotti;
