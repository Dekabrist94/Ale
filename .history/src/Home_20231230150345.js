// import React from 'react';
// import Slider from './Components/Slider';
// import { Button, Col, Container, Row } from 'react-bootstrap';
// import azienda from './img/azienda.jpg';
// import Map from './Components/GoogleMaps';
// import Cards from './Components/Cards';

// export const Home = () => {
//   return (
//     <>
//       {/* *********** Slider*/}
//       <Slider />
//       {/* ******************* */}
//       <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
//         <h1 style={{ color: 'darkred', borderLeft: '5px darkred solid', paddingLeft: '2rem' }}>
//           Informazioni
//         </h1>
//       </Container>

//       <Cards />

//       <Container
//         style={{
//           maxWidth: '100%',
//           height: '40vh',
//           paddingTop: '0.2rem',
//           paddingLeft: '12rem',
//           paddingBottom: '4rem',
//           background: 'linear-gradient(to right, red, black)',
//         }}>
//         <h1
//           style={{
//             color: 'white',
//             borderLeft: '5px white solid',
//             paddingLeft: '2rem',
//             marginTop: '1rem',
//           }}>
//           Avanzamento
//         </h1>
//       </Container>
//       <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
//         <Row>
//           <Col md={6}>
//             <img
//               src={azienda}
//               height={400}
//               width={600}
//               style={{ marginTop: '2rem', marginLeft: '-2rem' }}
//             />
//           </Col>
//           <Col md={5}>
//             <h2>ROEMA: Mecanica di Precisione</h2>
//             <p style={{ fontSize: '18px' }}>
//               Anche un piccolo pezzo può fare la differenza: è una questione di frazioni di
//               millimetro, di qualità dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene
//               e abbiamo il personale e le tecnologie per creare la componente perfetta.
//             </p>

//             <ul style={{ style: 'list-style-type: circle', fontSize: '15px' }}>
//               <li>Tornitura e fresatura di altissima precisione con macchine fino a 4 assi</li>
//               <li>Trattamenti superficiali</li>
//               <li>
//                 Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
//                 ferro-nichel e titanio
//               </li>
//             </ul>
//             <p style={{ fontSize: '20px' }}>
//               <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
//             </p>
//             <p style={{ fontSize: '20px' }}>
//               Su richiesta viene effettuata la campionatura del pezzo finale
//             </p>
//             <Button variant="primary">Scopri di Piu</Button>
//           </Col>
//         </Row>
//       </Container>
//       <Container
//         style={{
//           paddingTop: '4rem',
//           paddingBottom: '4rem',
//           maxWidth: '100%',
//           height: '52vh',
//           paddingTop: '0.5rem',
//           paddingBottom: '4rem',
//           background: 'linear-gradient(to right, red, black)',
//         }}>
//         <Row>
//           {/* Левая колонка с текстом */}
//           <Col md={6}>
//             <div className="text-white p-4 text-center">
//               <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
//               <p className="fw-bold">P. IVA: IT01772580336</p>
//               <p className="fw-bold">Tel: +39 035.5682454</p>
//               <p className="fw-bold">
//                 Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
//               </p>
//             </div>
//           </Col>

//           {/* Правая колонка с картой */}
//           <Col md={6}>
//             <Map />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

import React from 'react';
import Slider from './Components/Slider';
import { Button, Col, Container, Row } from 'react-bootstrap';
import azienda from './img/azienda.jpg';
import Map from './Components/GoogleMaps';
import Cards from './Components/Cards';

export const Home = () => {
  return (
    <>
      {/* *********** Slider*/}
      <Slider />
      {/* ******************* */}
      <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h1
          style={{
            color: 'darkred',
            borderLeft: '5px darkred solid',
            paddingLeft: '2rem',
            fontSize: '1.5rem',
          }}>
          Informazioni
        </h1>
      </Container>

      <Cards />

      <Container
        style={{
          maxWidth: '100%',
          height: '40vh',
          paddingTop: '0.2rem',
          paddingLeft: '2rem', // уменьшил значение paddingLeft
          paddingBottom: '4rem',
          background: 'linear-gradient(to right, red, black)',
        }}>
        <h1
          style={{
            color: 'white',
            borderLeft: '5px white solid',
            paddingLeft: '1rem', // уменьшил значение paddingLeft
            marginTop: '1rem',
            fontSize: '1.2rem', // уменьшил размер шрифта
          }}>
          Avanzamento
        </h1>
      </Container>
      <Container style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {' '}
        {/* уменьшил значение paddingTop */}
        <Row>
          <Col md={12} style={{ textAlign: 'center' }}>
            {' '}
            {/* изменен размер колонки и выравнивание по центру */}
            <img
              src={azienda}
              height={200} // уменьшил высоту изображения
              width="100%" // ширина на 100%
              style={{ marginTop: '2rem' }}
              alt="Azienda"
            />
          </Col>
          <Col md={12} style={{ textAlign: 'center' }}>
            {' '}
            {/* изменен размер колонки и выравнивание по центру */}
            <h2>ROEMA: Mecanica di Precisione</h2>
            <p style={{ fontSize: '14px' }}>
              {' '}
              {/* уменьшил размер шрифта */}
              Anche un piccolo pezzo può fare la differenza: è una questione di frazioni di
              millimetro, di qualità dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene
              e abbiamo il personale e le tecnologie per creare la componente perfetta.
            </p>
            <ul style={{ listStyleType: 'circle', fontSize: '12px' }}>
              {' '}
              {/* изменен способ указания стиля маркера */}
              <li>Tornitura e fresatura di altissima precisione con macchine fino a 4 assi</li>
              <li>Trattamenti superficiali</li>
              <li>
                Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
                ferro-nichel e titanio
              </li>
            </ul>
            <p style={{ fontSize: '16px' }}>
              <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
            </p>
            <p style={{ fontSize: '16px' }}>
              Su richiesta viene effettuata la campionatura del pezzo finale
            </p>
            <Button variant="primary">Scopri di Piu</Button>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          paddingTop: '2rem', // уменьшил значение paddingTop
          paddingBottom: '4rem',
          maxWidth: '100%',
          height: '52vh',
          background: 'linear-gradient(to right, red, black)',
        }}>
        <Row>
          {/* Левая колонка с текстом */}
          <Col md={6} style={{ textAlign: 'center' }}>
            {' '}
            {/* изменен размер колонки и выравнивание по центру */}
            <div className="text-white p-4">
              <h3 className="fw-bold mt-5 pt-5">OFFICINE RO.E.MA. MECCANICA DI PRECISIONE</h3>
              <p className="fw-bold">P. IVA: IT01772580336</p>
              <p className="fw-bold">Tel: +39 035.5682454</p>
              <p className="fw-bold">
                Sede operativa: via Ca’ Fittavoli, 20-21 – 24030 Barzana (BG) Italia
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {' '}
        {/* уменьшил значение paddingTop */}
        {/* Правая колонка с картой */}
        <Col md={6} style={{ textAlign: 'center' }}>
          {' '}
          {/* изменен размер колонки и выравнивание по центру */}
          <Map />
        </Col>
      </Container>
    </>
  );
};
