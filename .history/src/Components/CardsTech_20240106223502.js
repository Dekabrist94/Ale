import React from 'react';
import Card from 'react-bootstrap/Card';
import AdaptiveCounter from './Counter';
import fresa from '../logo/fresa.png';
import exp from '../logo/exp.png';
import mq from '../logo/mq.png';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 0rem;
`;

const StyledCard = styled(Card)`
  width: 18rem;
  border: none;
  margin: 0.5rem;

  @media (max-width: 320px) {
    width: 100%;
  }
`;

const StyledCardImg = styled(Card.Img)`
  width: 50%;
  margin: 0 auto;
  padding-top: 1rem;
`;

const StyledCardTitle = styled(Card.Title)`
  text-align: center;
  font-size: 18px;
`;

function CardsForTech() {
  return (
    <StyledContainer>
      <Row xs={1} md={1} lg={3} xl={3}>
        <StyledCard>
          <StyledCardImg variant="top" src={exp} />
          <Card.Body>
            <StyledCardTitle>Anni di esperienza</StyledCardTitle>
            <Card.Text>
              <AdaptiveCounter initialValue={0} targetValue={30} duration={5000} prefix="+" />
            </Card.Text>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <StyledCardImg variant="top" src={fresa} />
          <Card.Body>
            <StyledCardTitle>Pezzi prodotti annualmente</StyledCardTitle>
            <Card.Text>
              <AdaptiveCounter initialValue={0} targetValue={250000} duration={2000} prefix="+" />
            </Card.Text>
          </Card.Body>
        </StyledCard>

        <StyledCard>
          <StyledCardImg variant="top" src={mq} />
          <Card.Body>
            <StyledCardTitle>Azienda</StyledCardTitle>
            <Card.Text>
              <AdaptiveCounter
                initialValue={0}
                targetValue={1500}
                duration={2000}
                prefix="+"
                suffix="MQ"
              />
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </Row>
    </StyledContainer>
  );
}

export default CardsForTech;
