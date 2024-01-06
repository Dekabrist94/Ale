import React from 'react';
import { Container } from 'react-bootstrap';
import ImageCollage from './Components/Colage';
import CardsForTech from './Components/CardsTech';
import AdaptiveCounter from './Components/Counter';

export const Technologia = () => {
  return (
    <>
      <Container style={{ paddingTop: '5rem' }}>
        <ImageCollage />
        <CardsForTech />
        <ul>
          <li>macchinari e strumenti di misura</li>
          <li>
            <AdaptiveCounter />
          </li>
          <li>{/*   */}</li>
        </ul>
      </Container>
    </>
  );
};
