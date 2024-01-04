import React from 'react';
import Slider from './Components/Slider';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';

import Cards from './Components/Cards';

const Map = () => {
  return (
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.7566530144862!2d9.562276668017816!3d45.7248288606892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781535a7f918c6d%3A0x768b1d5ec2a30810!2sOFFICINE%20RO.E.MA.%20MECCANICA%20DI%20PRECISIONE!5e0!3m2!1sru!2sit!4v1703890429842!5m2!1sru!2sit"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};

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
      <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Map />
      </Container>
    </>
  );
};
