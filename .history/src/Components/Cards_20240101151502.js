import React from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom'; // Используем react-router-dom вместо react-scroll
import img from '../img/3.jpg';
import pezzo from '../img/pezzo.jpg';
import i5 from '../img/5.jpg';
import styled from 'styled-components';

// Создаем стилизованный компонент StyledCardsContainer
const StyledCardsContainer = styled(Container)`
  padding-top: 0rem;
  padding-bottom: 2rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-left: 0rem;
  padding-right: 0rem;

  @media (max-width: 2560px) {
    margin-top: 5vh;
    width: 100%;
  }

  @media (max-width: 1440px) {
    margin-top: 17.9vh;
    width: 100%;
    padding-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-top: 5vh;
    width: 100%;
    padding-bottom: 0;
    padding-right: 0rem;
    padding-left: 8rem;
    margin-left: 0rem;
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /* Дополнительные медиа-запросы при необходимости */
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
    <StyledCardsContainer>
      <Row xs={1} md={1} lg={3} xl={4}>
        {Object.keys(textData).map((key, index) => (
          <Col key={key} style={{ margin: '2.5rem' }}>
            <Fade delay={index * 200}>
              <Card>
                <Card.Img
                  variant="top"
                  src={key === 'forza' ? img : key === 'lavori' ? pezzo : i5}
                  height={350}
                />
                <Card.Body>
                  <Card.Title>{textData[key].title}</Card.Title>
                  <Card.Text>{textData[key].text}</Card.Text>
                  <Link to="targetElement" smooth duration={500}>
                    <Button variant="primary">Scopri di Piu</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
    </StyledCardsContainer>
  );
};

export default Cards;
