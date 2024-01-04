import React from 'react';
import Slider from './Components/Slider';
import { Button, Col, Container, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';

export const Home = () => {
  return (
    <>
      {/* *********** Slider*/}
      <Slider />
      {/* ******************* */}
      <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h1 style={{ color: 'darkred', borderLeft: '5px darkred solid', paddingLeft: '2rem' }}>
          Informazioni
        </h1>
      </Container>

      <Cards />

      <Container
        style={{
          maxWidth: '100%',
          height: '40vh',
          paddingTop: '0.2rem',
          paddingLeft: '8rem',
          paddingBottom: '4rem',
          background: 'linear-gradient(to right, red, black)',
        }}>
        <h1 style={{ color: 'white', borderLeft: '5px white solid', paddingLeft: '2rem' }}>
          Avanzamento
        </h1>
      </Container>
      <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Row>
          <Col md={6}>
            <img src={azienda} height={350} width={500} />
          </Col>
          <Col md={5}>
            <h2>ROEMA: Mecanica di Precisione</h2>
            <p>
              The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. The standard Lorem Ipsum passage, used since the
              1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button variant="primary">Scopri di Piu</Button>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          maxWidth: '100%',
          height: '52vh',
          paddingTop: '0.5rem',
          paddingBottom: '4rem',
          background: 'linear-gradient(to right, red, black)',
        }}>
        <Row>
          {/* Левая колонка с текстом */}
          <Col md={6}>
            <div className="text-white p-4 text-center">
              <h2 className="fw-bold pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h2>
              <p className="fw-bold">P. IVA: IT01772580336</p>
              <p className="fw-bold">Tel: +39 035.5682454</p>
              <p className="fw-bold">
                Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
              </p>
            </div>
          </Col>

          {/* Правая колонка с картой */}
          <Col md={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};
