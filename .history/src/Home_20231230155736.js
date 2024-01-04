import React from 'react';
import Slider from './Components/Slider';
import { Button, Col, Container, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';

export const Home = () => {
  return (
    <>
      {/* *********** Slider */}
      <Slider />
      {/* ******************* */}
      <Container className="info-container">
        <h1 className="info-header">Informazioni</h1>
      </Container>

      <Cards />

      <Container className="avanzamento-container">
        <h1 className="avanzamento-header">Avanzamento</h1>
      </Container>
      <Container className="main-container">
        <Row>
          <Col md={6} sm={12} className="image-col">
            <img src={azienda} alt="Azienda" className="main-image" />
          </Col>
          <Col md={6} sm={12} className="text-col">
            <h2>ROEMA: Mecanica di Precisione</h2>
            <p className="main-paragraph">
              Anche un piccolo pezzo può fare la differenza: è una questione di frazioni di
              millimetro, di qualità dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene
              e abbiamo il personale e le tecnologie per creare la componente perfetta.
            </p>

            <ul className="main-list">
              <li>Tornitura e fresatura di altissima precisione con macchine fino a 4 assi</li>
              <li>Trattamenti superficiali</li>
              <li>
                Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
                ferro-nichel e titanio
              </li>
            </ul>
            <p className="main-paragraph">
              <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
            </p>
            <p className="main-paragraph">
              Su richiesta viene effettuata la campionatura del pezzo finale
            </p>
            <Button variant="primary">Scopri di Piu</Button>
          </Col>
        </Row>
      </Container>
      <Container className="contact-container">
        <Row>
          {/* Левая колонка с текстом */}
          <Col md={6} className="contact-text-col">
            <div className="text-white p-4">
              <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
              <p className="fw-bold">P. IVA: IT01772580336</p>
              <p className="fw-bold">Tel: +39 035.5682454</p>
              <p className="fw-bold">
                Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
              </p>
            </div>
          </Col>

          {/* Правая колонка с картой */}
          <Col md={6} className="contact-map-col">
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
};
