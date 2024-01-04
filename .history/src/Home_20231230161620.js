import React from 'react';
import Slider from './Components/Slider';
import { Button, Col, Container, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  @media (max-width: 425px) {
    width: 40.5rem;
  }

  @media (max-width: 375px), (max-width: 320px) {
    width: 40.5rem;
  }
`;
const StyledRow = styled(Row)`
  @media (max-width: 425px) {
    /* Ваши стили для разрешения <= 425px */
  }

  @media (max-width: 375px), (max-width: 320px) {
    /* Ваши стили для разрешений <= 375px и <= 320px */
  }
`;

const StyledCol = styled(Col)`
  @media (max-width: 425px) {
    /* Ваши стили для разрешения <= 425px */
  }

  @media (max-width: 375px), (max-width: 320px) {
    /* Ваши стили для разрешений <= 375px и <= 320px */
  }
`;

export const Home = () => {
  return (
    <>
      {/* *********** Slider*/}
      <Slider />
      {/* ******************* */}
      <StyledContainer>
        <h1 style={{ color: 'darkred', borderLeft: '5px darkred solid', paddingLeft: '2rem' }}>
          Informazioni
        </h1>
      </StyledContainer>

      <Cards />

      <StyledContainer
        style={{
          height: '40vh',
          paddingTop: '0.2rem',
          paddingLeft: '12rem',
          paddingBottom: '4rem',
          background: 'linear-gradient(to right, red, black)',
        }}>
        <h1
          style={{
            color: 'white',
            borderLeft: '5px white solid',
            paddingLeft: '2rem',
            marginTop: '1rem',
          }}>
          Avanzamento
        </h1>
      </StyledContainer>
      <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <StyledRow>
          <StyledCol md={6}>
            <img
              src={azienda}
              height={400}
              width={600}
              style={{ marginTop: '2rem', marginLeft: '-2rem' }}
            />
          </StyledCol>
          <StyledCol md={5}>
            <h2>ROEMA: Mecanica di Precisione</h2>
            <p style={{ fontSize: '18px' }}>
              Anche un piccolo pezzo può fare la differenza: è una questione di frazioni di
              millimetro, di qualità dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene
              e abbiamo il personale e le tecnologie per creare la componente perfetta.
            </p>
            <ul style={{ style: 'list-style-type: circle', fontSize: '15px' }}>
              <li>Tornitura e fresatura di altissima precisione con macchine fino a 4 assi</li>
              <li>Trattamenti superficiali</li>
              <li>
                Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
                ferro-nichel e titanio
              </li>
            </ul>
            <p style={{ fontSize: '20px' }}>
              <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
            </p>
            <p style={{ fontSize: '20px' }}>
              Su richiesta viene effettuata la campionatura del pezzo finale
            </p>
            <Button variant="primary">Scopri di Piu</Button>
          </StyledCol>
        </StyledRow>
      </Container>
      <Container
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          maxWidth: '100%',
          height: '52vh',
          paddingTop: '0.5rem',
          paddingBottom: '4rem',
          background: 'linear-gradient(to right, red, black)',
        }}>
        <StyledRow>
          {/* Левая колонка с текстом */}
          <StyledCol md={6}>
            <div className="text-white p-4 text-center">
              <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
              <p className="fw-bold">P. IVA: IT01772580336</p>
              <p className="fw-bold">Tel: +39 035.5682454</p>
              <p className="fw-bold">
                Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
              </p>
            </div>
          </StyledCol>

          {/* Правая колонка с картой */}
          <StyledCol md={6}>
            <Map />
          </StyledCol>
        </StyledRow>
      </Container>
    </>
  );
};