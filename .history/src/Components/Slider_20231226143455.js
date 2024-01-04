import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../img/1.jpg'; // Изменены имена переменных
import img2 from '../img/2.jpg'; // Изменены имена переменных
import img3 from '../img/3.jpg'; // Изменены имена переменных
import img4 from '../img/4.jpg'; // Изменены имена переменных
import img5 from '../img/5.jpg'; // Изменены имена переменных
import img6 from '../img/6.jpg'; // Изменены имена переменных

export default function Slider() {
  return (
    <Carousel style={{ paddingTop: '11.2vh' }}>
      <Carousel.Item style={{ height: '89vh' }}>
        <img className="d-block w-100" src={img1} alt="First Slide" />{' '}
        {/* Используйте правильные имена переменных */}
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Well Done ahahahahah</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img2} alt="Second Slide" />{' '}
        {/* Используйте правильные имена переменных */}
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Well Done ahahahahah</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img3} alt="Third Slide" />{' '}
        {/* Используйте правильные имена переменных */}
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Well Done ahahahahah</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img4} alt="Four Slide" />{' '}
        {/* Используйте правильные имена переменных */}
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Well Done ahahahahah</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img5} alt="Fiveth Slide" />{' '}
        {/* Используйте правильные имена переменных */}
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Well Done ahahahahah</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '90vh' }}>
        <img className="d-block w-100" src={img6} alt="Sixth Slide" />{' '}
        {/* Используйте правильные имена переменных */}
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Well Done ahahahahah</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Добавьте другие слайды, аналогично первому */}
    </Carousel>
  );
}
