import Carousel from 'react-bootstrap/Carousel';
import big1 from '../img/b1.png';
import ok15 from '../img/ok15.png';
import dos1 from '../img/dos1.png';

function ImageCollage() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="w-50">
        <img className="d-block w-100" src={big1} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="w-50">
        <img className="d-block w-100" src={ok15} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="w-50">
        <img className="d-block w-100" src={dos1} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCollage;
