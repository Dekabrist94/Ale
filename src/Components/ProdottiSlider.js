import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pneumatica from '../img/pneumatica.png';
import automotive from '../img/automotive.png';
import olio from '../img/Oliodinamica.png';
import varia from '../img/varia.png';

export const ProdottiSlider=()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={pneumatica} alt='pneumatica'/>
        <Carousel.Caption>
          <h3>Pneumatica</h3>
          <p>50%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={automotive} alt='automotive'/>
        <Carousel.Caption>
          <h3>Automotive</h3>
          <p>20%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={olio} alt='oliodinamica'/>
        <Carousel.Caption>
          <h3>Oliodinamica</h3>
          <p>
           15%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={varia} alt='varia'/>
        <Carousel.Caption>
          <h3>Varia</h3>
          <p>
           15%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

