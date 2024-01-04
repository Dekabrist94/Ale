import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import img from '../img/3.jpg';
import pezzo from '../img/pezzo.jpg';
import i5 from '../img/5.jpg';
import styled from 'styled-components';

// Стили для Container
const StyledContainer = styled(Container)`
  padding-top: 0rem;
  padding-bottom: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 9rem;
  padding-right: 5rem;
`;

// Стили для Card
const StyledCard = styled(Card)`
  width: 18rem;
  margin-bottom: 1rem;
`;

// Стили для Card.Img
const StyledCardImage = styled(Card.Img)`
  height: 350px;
`;

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
    <StyledContainer>
      <Row>
        {Object.keys(textData).map((key) => (
          <Col key={key} xs={12} md={6} lg={4}>
            <StyledCard>
              <StyledCardImage
                variant="top"
                src={key === 'forza' ? img : key === 'lavori' ? pezzo : i5}
              />
              <Card.Body>
                <Card.Title>{textData[key].title}</Card.Title>
                <Card.Text>{textData[key].text}</Card.Text>
                <Button variant="primary">Scopri di Piu</Button>
              </Card.Body>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default Cards;
