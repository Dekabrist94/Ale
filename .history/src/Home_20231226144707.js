import React from 'react';
import Slider from './Components/Slider';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img from './img/3.jpg';
import img6 from './img/6.jpg';
import pezzo from './img/pezzo.jpg';
import i5 from './img/5.jpg';
import azienda from './img/azienda.jpg';
import Parallax from './Components/Parallax';

export const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <Col>
            <Card style={{ width: '18rem', height: '20vh' }}>
              <Card.Img variant="top" src={img} height={250} />
              <Card.Body>
                <Card.Title>La Nostra Forza</Card.Title>
                <Card.Text>
                  "La nostra forza risiede nella precisione delle misure dei nostri pezzi. La
                  misurazione accurata dei componenti è alla base della fiducia dei nostri clienti.
                  Per noi, i clienti sono il motore del nostro progresso continuo."
                </Card.Text>
                <Button variant="primary">Scopri di Piu</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '20vh' }}>
              <Card.Img variant="top" src={pezzo} height={250} />
              <Card.Body>
                <Card.Title>Nostri Lavori</Card.Title>
                <Card.Text>
                  "La nostra dedizione costante al miglioramento riflette la nostra volontà di
                  crescere costantemente. Ogni esperienza non solo ci offre nuove opportunità di
                  apprendimento, ma anche il terreno fertile per l'evoluzione.
                </Card.Text>
                <Button variant="primary">Scopri di Piu</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', height: '20vh' }}>
              <Card.Img variant="top" src={i5} height={250} />
              <Card.Body>
                <Card.Title>La Nostra Stabilita</Card.Title>
                <Card.Text>
                  "La nostra stabilità è la roccia su cui costruiamo il nostro cammino verso
                  l'eccellenza, resistendo alle sfide con fiducia. In ogni momento, siamo saldi nel
                  nostro impegno, sostenendo la forza di un progresso duraturo e ispiratore."
                </Card.Text>
                <Button variant="primary">Scopri di Piu</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

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
