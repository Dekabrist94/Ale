import Carousel from 'react-bootstrap/Carousel';
import big1 from '../img/b1.png';
import ok15 from '../img/ok15.png';
import dos1 from '../img/dos1.png';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  padding-top: 5rem;
  max-width: 800px;
  margin: 2rem auto 0; /* Установка отступа сверху на 2rem и удаление отступа снизу */

  @media (max-width: 320px) {
    max-width: 100%; /* Полная ширина для экранов шириной менее 320px */
  }

  @media (min-width: 321px) and (max-width: 375px) {
    max-width: 100%; /* Полная ширина для экранов от 321px до 375px */
  }

  @media (min-width: 376px) and (max-width: 425px) {
    max-width: 100%; /* Полная ширина для экранов от 376px до 425px */
  }

  @media (min-width: 426px) and (max-width: 768px) {
    max-width: 100%; /* Полная ширина для экранов от 426px до 768px */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%; /* Полная ширина для экранов от 769px до 1024px */
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    max-width: 800px; /* Вернуть максимальную ширину 800px для экранов от 1025px до 1440px */
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    max-width: 800px; /* Вернуть максимальную ширину 800px для экранов от 1441px до 2560px */
  }

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
`;

const StyledCarouselItem = styled(Carousel.Item)`
  img {
    width: 100%;
    height: auto;
  }
`;

function ImageCollage() {
  return (
    <StyledCarousel data-bs-theme="dark" touch>
      <StyledCarouselItem>
        <img className="d-block w-50 mx-auto" src={big1} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Pezzo dal BIGLIA</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img className="d-block w-50 mx-auto" src={ok15} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Pezzo dal Okuma LB-15</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img className="d-block w-50 mx-auto" src={dos1} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Pezzo dal DOOSAN</p>
        </Carousel.Caption>
      </StyledCarouselItem>
    </StyledCarousel>
  );
}

export default ImageCollage;
