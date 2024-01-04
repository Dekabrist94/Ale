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

      {/* Avanzamento Section */}
      <Container
        className="py-2"
        style={{
          background: 'linear-gradient(to right, red, black)',
        }}>
        <h1 className="text-white text-center">Avanzamento</h1>
      </Container>

      {/* ROEMA: Mecanica di Precisione Section */}
      <Container className="py-2">
        <Row className="flex-column-reverse flex-md-row">
          <Col md={6}>
            <img src={azienda} height={350} width={500} className="img-fluid" alt="ROEMA" />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold mt-4 mt-md-0">ROEMA: Mecanica di Precisione</h2>
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

      {/* OFFICINE RO.E.MA. MECCANICA DI PRECISIONE Section */}
      <Container
        className="py-2"
        style={{
          background: 'linear-gradient(to right, red, black)',
        }}>
        <Row>
          <Col xs={12} md={6} className="text-white p-4 text-center">
            <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
            <p className="fw-bold">P. IVA: IT01772580336</p>
            <p className="fw-bold">Tel: +39 035.5682454</p>
            <p className="fw-bold">
              Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};
