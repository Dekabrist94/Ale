import React from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';
import Slider from './Components/Slider';

export const Home = () => {
  return (
    <>
      {/* Slider */}
      <Slider />
      {/* Информационный блок */}
      <Container className="py-4">
        <h1
          style={{
            borderLeft: '5px darkRed solid',
            marginTop: '2rem',
            marginLeft: '2rem',
            paddingLeft: '1rem',
          }}>
          Informazioni
        </h1>
      </Container>

      <Cards />

      {/* Блок с фоном и текстом */}
      <Container
        fluid
        className="text-white py-2"
        style={{ background: 'linear-gradient(to right, red, black)', height: '90vh' }}>
        <h1
          style={{
            borderLeft: '5px white solid',
            marginTop: '2rem',
            marginLeft: '8rem',
            paddingLeft: '1rem',
          }}>
          Avanzamento
        </h1>
      </Container>

      {/* Блок с изображением и текстом */}
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <img src={azienda} alt="Azienda" className="img-fluid mt-4" />
          </Col>
          <Col md={6} style={{ paddingTop: '2rem' }}>
            <h2>ROEMA: Mecanica di Precisione</h2>
            <p style={{ fontSize: '25px', textAlign: 'left' }}>
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
          </Col>
        </Row>
      </Container>

      {/* Блок с текстом и картой */}
      <Container
        fluid
        className="text-white py-5"
        style={{ background: 'linear-gradient(to right, red, black)' }}>
        <Row>
          {/* Левая колонка с текстом */}
          <Col md={6} className="text-center py-5">
            <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
            <p className="fw-bold">P. IVA: IT01772580336</p>
            <p className="fw-bold">Tel: +39 035.5682454</p>
            <p className="fw-bold">
              Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
            </p>
          </Col>

          {/* Карта */}
          <Col md={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};
