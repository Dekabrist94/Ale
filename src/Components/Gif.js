import React from 'react';
import { Container } from 'react-bootstrap';
import roema from '../gif/RoemaGif-speed.gif'

const GIF = () => {
  return (
    <Container fluid style={{ width: '100%'}}>
      <img
        src={roema}
        alt="Adaptive GIF"
        className="img-fluid" // Класс 'img-fluid' делает изображение адаптивным
        style={{ maxWidth: '100%', height: 'auto', marginTop:'5rem' }}
      />
    </Container>
  );
};

export default GIF;
