import React from 'react';
import Slider from './Components/Slider';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Parallax from './Components/Parallax';
import Cards from './Components/Cards';

export const Home = () => {
  return (
    <>
      <Slider />
      <Container
        style={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          margin: '0, auto',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '5rem',
        }}>
        <Cards />

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
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. The standard Lorem Ipsum passage, used
                since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="primary">Scopri di Piu</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
