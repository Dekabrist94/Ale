import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import img from '../img/3.jpg';
import pezzo from '../img/pezzo.jpg';
import i5 from '../img/5.jpg';

const CardComponent = ({ title, text, imgSrc }) => (
  <Col xs={12} md={6} lg={4} style={{ marginBottom: '1rem' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} height={250} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Scopri di Piu</Button>
      </Card.Body>
    </Card>
  </Col>
);

const Cards = () => {
  const textData = {
    forza: {
      title: 'La Nostra Forza',
      text: 'La nostra forza risiede nella precisione delle misure dei nostri pezzi. La misurazione accurata dei componenti è alla base della fiducia dei nostri clienti. Per noi, i clienti sono il motore del nostro progresso continuo.',
      imgSrc: img,
    },
    lavori: {
      title: 'Nostri Lavori',
      text: "La nostra dedizione costante al miglioramento riflette la nostra volontà di crescere costantemente. Ogni esperienza non solo ci offre nuove opportunità di apprendimento, ma anche il terreno fertile per l'evoluzione.",
      imgSrc: pezzo,
    },
    stabilita: {
      title: 'La Nostra Stabilita',
      text: "La nostra stabilità è la roccia su cui costruiamo il nostro cammino verso l'eccellenza, resistendo alle sfide con fiducia. In ogni momento, siamo saldi nel nostro impegno, sostenendo la forza di un progresso duraturo e ispiratore.",
      imgSrc: i5,
    },
  };

  return (
    <Container className="text-center my-5">
      <h1 style={{ color: 'darkred', borderLeft: '5px darkred solid', paddingLeft: '2rem' }}>
        Informazioni
      </h1>

      <Row className="justify-content-center">
        {Object.keys(textData).map((key) => (
          <CardComponent key={key} {...textData[key]} />
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
