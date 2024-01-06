import Carousel from 'react-bootstrap/Carousel';
import big1 from '../img/b1.png';
import ok15 from '../img/ok15.png';
import dos1 from '../img/dos1.png';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  margin-top: 20px;

  .carousel-inner {
    .carousel-item {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

function ImageCollage() {
  return (
    <StyledCarousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={big1} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ok15} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={dos1} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  );
}

export default ImageCollage;
