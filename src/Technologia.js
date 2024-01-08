import React from 'react';
import { Container } from 'react-bootstrap';
import ImageCollage from './Components/Colage';
import CardsForTech from './Components/CardsTech';
import Gif from './Components/Gif';

export const Technologia = () => {
  return (
    <>
   
      <Container style={{ paddingTop: '0rem'}}>
        <p style={{borderBottom: '5px red solid', color:'black'}}>LA Nostra Technologia</p>
         <Gif/>
        <ImageCollage />
        <CardsForTech />
        <ul>
          <li>macchinari e strumenti di misura</li>
        </ul>
      </Container>
    </>
  );
};
