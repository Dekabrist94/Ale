import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';
import Slider from './Components/Slider';
import styled from 'styled-components';
import doosan from './img/doosan.png';
import biglia from './img/biglia.png';

const StyledContainer = styled(Container)`
  @media (max-width: 320px) {
    margin-top: 0rem;
  }
`;

const StyledBackgroundContainer = styled(Container)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, red, black);
  height: 90vh;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 50%;
  height: auto;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  animation: fadeInUp 1s ease-out;
  opacity: 0;

  @media (max-width: 768px) {
    width: 100%;
    transform: translateY(0);
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledText = styled.h1`
  position: absolute;
  border-left: 5px white solid;
  padding-left: 1rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
  opacity: 0;
  animation: fadeInRight 1s ease-out;
  transform: translateY(50%);

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  @keyframes fadeInRight {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Home = () => {
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
      <StyledBackgroundContainer fluid>
        <StyledImage src={doosan} alt="Doosan" />
        <StyledImage src={biglia} alt="Biglia" style={{ top: 'auto', bottom: 0 }} />
        <StyledText>Avanzamento</StyledText>
      </StyledBackgroundContainer>

      {/* Блок с изображением и текстом */}
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <img style={{ height: '90%' }} src={azienda} alt="Azienda" className="img-fluid mt-2" />
          </Col>
          <Col md={6} style={{ paddingTop: '2rem' }}>
            <h2>ROEMA: Mecanica di Precisione</h2>
            {/* Remaining content */}
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
            {/* Remaining content */}
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
