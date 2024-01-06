import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import big1 from '../img/b1.png';
import ok15 from '../img/ok15.png';
import dos1 from '../img/dos1.png';

const ImageCollageContainer = styled(Container)`
  margin-top: 20px;
`;

const ImageCollage = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={big1.png} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ok15.png} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dos1.png} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCollage;
