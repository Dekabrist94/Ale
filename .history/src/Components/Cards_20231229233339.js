import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import img from '../img/3.jpg';
import pezzo from '../img/pezzo.jpg';
import i5 from '../img/5.jpg';

const cardStyles = {
  width: '18rem',
};

const Cards = () => {
  const textData = {
    forza: {
      title: 'La Nostra Forza',
      text: 'La nostra forza risiede nella precisione delle misure dei nostri pezzi. La misurazione accurata dei componenti è alla base della fiducia dei nostri clienti. Per noi, i clienti sono il motore del nostro progresso continuo.',
    },
    lavori: {
      title: 'Nostri Lavori',
      text: "La nostra dedizione costante al miglioramento riflette la nostra volontà di crescere costantemente. Ogni esperienza non solo ci offre nuove opportunità di apprendimento, ma anche il terreno fertile per l'evoluzione.",
    },
    stabilita: {
      title: 'La Nostra Stabilita',
      text: "La nostra stabilità è la roccia su cui costruiamo il nostro cammino verso l'eccellenza, resistendo alle sfide con fiducia. In ogni momento, siamo saldi nel nostro impegno, sostenendo la forza di un progresso duraturo e ispiratore.",
    },
  };

  return (
    <Row>
      {Object.keys(textData).map((key) => (
        <Col key={key} xs={12} md={6} lg={4} style={{ marginBottom: '1rem' }}>
          <Card style={cardStyles}>
            <Card.Img
              variant="top"
              src={key === 'forza' ? img : key === 'lavori' ? pezzo : i5}
              height={250}
            />
            <Card.Body>
              <Card.Title>{textData[key].title}</Card.Title>
              <Card.Text>{textData[key].text}</Card.Text>
              <Button variant="primary">Scopri di Piu</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
