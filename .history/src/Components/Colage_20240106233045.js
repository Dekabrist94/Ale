import Carousel from 'react-bootstrap/Carousel';
import big1 from '../img/b1.png';
import ok15 from '../img/ok15.png';
import dos1 from '../img/dos1.png';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  max-width: 600px; /* Установите максимальную ширину слайдера по вашему желанию */
  margin: 20px auto; /* Центрирование слайдера по горизонтали */
`;

const StyledCarouselItem = styled(Carousel.Item)`
  img {
    width: 100%;
    height: auto;
  }
`;

function ImageCollage() {
  return (
    <StyledCarousel data-bs-theme="dark">
      <StyledCarouselItem>
        <img className="d-block w-50" src={big1} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img className="d-block w-50" src={ok15} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img className="d-block w-50" src={dos1} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </StyledCarouselItem>
    </StyledCarousel>
  );
}

export default ImageCollage;
