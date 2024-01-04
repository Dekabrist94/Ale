import React, { useEffect, useRef } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';
import Slider from './Components/Slider';
import styled, { keyframes } from 'styled-components';
import doosan from './img/doosan.png';
import biglia from './img/biglia.png';

const StyledRedBlockContainer = styled(Container)`
  @media (max-width: 1440px) {
    height: 150vh;
  }
`;

// const StyledImageTop = styled.img`
//   width: 100%;
//   height: auto;
//   top: 0;
//   left: 0;
//   transform: translateY(-50%);
//   opacity: 0;
//   margin-top: 0rem;

//   @media (max-width: 2560px) {
//     width: 85%;
//     margin-top: -2rem;
//   }

//   @media (max-width: 1440px) {
//     width: 100%;
//     margin-top: -2rem;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-top: 0rem;
//   }
//   @media (max-width: 686px) {
//     width: 60%;
//     margin-top: 1rem;
//   }

//   @media (max-width: 425px) {
//     width: 100%;
//     margin-top: 1rem;
//   }

//   @media (max-width: 375px) {
//     width: 100%;
//     margin-top: 1rem;
//   }
//   @media (max-width: 320px) {
//     width: 100%;
//     margin-top: 1rem;
//   }
// `;

// const StyledImageBottom = styled.img`
//   width: 100%;
//   height: auto;
//   margin-top: 10rem;
//   bottom: 0;
//   right: 0;
//   transform: translateY(50%);
//   opacity: 0;

//   @media (max-width: 2560px) {
//     width: 100%;
//     margin-top: 0rem;
//   }
//   @media (max-width: 1440px) {
//     width: 100%;
//     margin-top: 0rem;
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//     margin-top: 8rem;
//   }
//   @media (max-width: 686px) {
//     width: 60%;
//     margin-top: -10rem;
//     margin-left: 18rem;
//   }
//   @media (max-width: 425px) {
//     width: 100%;
//     margin-top: -5rem;
//     margin-left: 0rem;
//   }
//   @media (max-width: 375px) {
//     width: 100%;
//     margin-top: 0rem;
//     margin-left: 0rem;
//   }
//   @media (max-width: 320px) {
//     width: 100%;
//     margin-top: 0rem;
//     margin-left: 0rem;
//   }
// `;

const StyledContainer = styled(Container)`
  @media (max-width: 320px), {
    margin-top: 0rem;
  }
`;

export const Home = () => {
  const topImageRef = useRef(null);
  const bottomImageRef = useRef(null);

  useEffect(() => {
    const topImage = topImageRef.current;
    const bottomImage = bottomImageRef.current;

    const handleScroll = () => {
      const topImageRect = topImage.getBoundingClientRect();
      const bottomImageRect = bottomImage.getBoundingClientRect();

      // Проверяем, виден ли верхний блок изображения
      if (topImageRect.top < window.innerHeight && topImageRect.bottom >= 0) {
        topImage.style.opacity = '1';
        topImage.style.transform = 'translateY(0)';
      }

      // Проверяем, виден ли нижний блок изображения
      if (bottomImageRect.top < window.innerHeight && bottomImageRect.bottom >= 0) {
        bottomImage.style.opacity = '1';
        bottomImage.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Вызываем событие, чтобы проверить видимость при загрузке страницы
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/* Slider */}
      <Slider />
      {/* Информационный блок */}
      <StyledContainer className="py-4">
        <h1
          style={{
            borderLeft: '5px darkRed solid',
            marginTop: '2.7rem',
            marginLeft: '0.2rem',
            paddingLeft: '1rem',
          }}>
          Informazioni
        </h1>
      </StyledContainer>

      <Cards />

      {/* Блок с фоном и текстом */}
      <StyledRedBlockContainer
        fluid
        className="text-white py-2"
        style={{ background: 'linear-gradient(to right, red, black)', height: '90vh' }}>
        <h1
          style={{
            borderLeft: '5px white solid',
            marginTop: '0.5rem',
            marginLeft: '2rem',
            paddingLeft: '1rem',
          }}>
          Avanzamento
        </h1>
        <Row xs={1} md={1} lg={2} xl={2}>
          <Col md={6}>
            {/* <img style={{ height: '90%' }} src={doosan} alt="Doosan" className="img-fluid mt-2" /> */}
          </Col>
          <Col md={6} style={{ paddingTop: '2rem' }}>
            {/* <StyledImageBottom ref={bottomImageRef} src={biglia} alt="Biglia" /> */}
          </Col>
        </Row>
      </StyledRedBlockContainer>

      {/* Блок с изображением и текстом */}
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <img style={{ height: '90%' }} src={azienda} alt="Azienda" className="img-fluid mt-2" />
          </Col>
          <Col md={6} style={{ paddingTop: '2rem' }}>
            <h2>ROEMA: Mecanica di Precisione</h2>
            <p style={{ fontSize: '25px', textAlign: 'left', marginTop: '2rem' }}>
              Anche un piccolo pezzo può fare la differenza: è una questione di frazioni di
              millimetro, di qualità dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene
              e abbiamo il personale e le tecnologie per creare la componente perfetta.
            </p>

            <ul style={{ style: 'list-style-type: circle', fontSize: '25px' }}>
              <li>Tornitura e fresatura di altissima precisione con macchine fino a 4 assi</li>
              <li>Trattamenti superficiali</li>
              <li>
                Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
                ferro-nichel e titanio
              </li>
            </ul>
            <p style={{ fontSize: '25px' }}>
              <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
            </p>
            <p style={{ fontSize: '25px' }}>
              Su richiesta viene effettuata la campionatura del pezzo finale
            </p>
            <Button variant="primary">Scopri di Piu</Button>
          </Col>
        </Row>
      </Container>

      {/* Блок с текстом и картой */}
      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(to right, red, black)' }}>
        <Row>
          {/* Левая колонка с текстом */}
          <Col md={6} className="text-center py-5">
            <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
            <p className="fw-bold">P. IVA: IT01772580336</p>
            <p className="fw-bold">Tel: +39 035.5682454</p>
            <p className="fw-bold">
              Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
            </p>
          </Col>

          {/* Карта */}
          <Col md={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};
