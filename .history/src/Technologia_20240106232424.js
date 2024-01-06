import React from 'react';
import { Container } from 'react-bootstrap';
import ImageCollage from './Components/Colage';
import CardsForTech from './Components/CardsTech';

export const Technologia = () => {
  return (
    <>
      <Container style={{ paddingTop: '0rem' }}>
        <ImageCollage />
        <CardsForTech />
        <ul>
          <li>macchinari e strumenti di misura</li>
          <li>{/*  */}</li>
          <li>{/*   */}</li>
        </ul>
      </Container>
    </>
  );
};
