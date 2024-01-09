import React from 'react';
import { Container } from 'react-bootstrap';
import ImageCollage from './Components/Colage';
import CardsForTech from './Components/CardsTech';
import Gif from './Components/Gif';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  text-align: center;

  @media (max-width: 576px) {
    padding-top: 1rem;
  }
`;

export const Technologia = () => {
  return (
    <>
      <StyledContainer>
        <h2>Technologia</h2>
        <Gif />
        <ImageCollage />
        <CardsForTech />
      </StyledContainer>
    </>
  );
};
