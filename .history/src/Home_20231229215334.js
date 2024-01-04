import React from 'react';
import Slider from './Components/Slider';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Parallax from './Components/Parallax';
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
      <Container
        style={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          margin: '0, auto',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '9rem',
          paddingRight: '5rem',
        }}>
        {/* ******************* Cards */}
        <Cards />
        {/* ******************* */}
      </Container>
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
              dichiaro di aver preso visione dell'informativa sulla privacy e di prestare il
              consenso al trattamento dei miei dati personali.
            </p>
            <Button variant="primary">Scopri di Piu</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
