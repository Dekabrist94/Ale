import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';

const StyledCarousel = styled(Carousel)`
  @media (max-width: 2560px) {
    margin-top: 10.5vh;
    width: 100%;
  }

  @media (max-width: 1440px) {
    margin-top: 17.9vh;
    width: 100%;
    padding-bottom: 0;
  }
`;

const StyledItem = styled(Carousel.Item)`
  @media (max-width: 375px),
    (max-width: 320px),
    (max-width: 425px),
    (max-width: 768px),
    (max-width: 1024px),
    (max-width: 1440px) {
    height: 45vh;
  }
`;

export default function Slider() {
  return (
    <StyledCarousel style={{ height: '90vh' }}>
      <StyledItem style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img1} alt="First Slide" />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Well Done ahahahahah</p>
        </Carousel.Caption>
      </StyledItem>

      <StyledItem style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img2} alt="Second Slide" />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Another caption for the second image.</p>
        </Carousel.Caption>
      </StyledItem>

      <StyledItem style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img3} alt="Third Slide" />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Yet another caption for the third image.</p>
        </Carousel.Caption>
      </StyledItem>

      <StyledItem style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img4} alt="Four Slide" />
        <Carousel.Caption>
          <h3>Four Slide</h3>
          <p>Caption for the fourth image.</p>
        </Carousel.Caption>
      </StyledItem>

      <StyledItem style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img5} alt="Fiveth Slide" />
        <Carousel.Caption>
          <h3>Fiveth Slide</h3>
          <p>Caption for the fifth image.</p>
        </Carousel.Caption>
      </StyledItem>

      <StyledItem style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img6} alt="Sixth Slide" />
        <Carousel.Caption>
          <h3>Sixth Slide</h3>
          <p>Caption for the sixth image.</p>
        </Carousel.Caption>
      </StyledItem>
    </StyledCarousel>
  );
}
