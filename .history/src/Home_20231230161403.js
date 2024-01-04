// Ваши стили для StyledContainer
const StyledContainer = styled(Container)`
  @media (max-width: 425px) {
    width: 40.5rem;
  }

  @media (max-width: 375px), (max-width: 320px) {
    width: 40.5rem;
  }
`;

// Ваши стили для StyledRow
const StyledRow = styled(Row)`
  @media (max-width: 425px) {
    /* Ваши стили для разрешения <= 425px */
  }

  @media (max-width: 375px), (max-width: 320px) {
    /* Ваши стили для разрешений <= 375px и <= 320px */
  }
`;

// Ваши стили для StyledCol
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
        <h1>Informazioni</h1>
      </StyledContainer>

      <Cards />

      <StyledContainer>
        <StyledRow>
          <StyledCol md={6}>
            <img src={azienda} alt="Azienda" />
          </StyledCol>
          <StyledCol md={5}>
            <h2>ROEMA: Mecanica di Precisione</h2>
            <p>
              Anche un piccolo pezzo può fare la differenza: è una questione di frazioni di
              millimetro, di qualità dei materiali, di customizzazione. In RO.E MA. lo sappiamo bene
              e abbiamo il personale e le tecnologie per creare la componente perfetta.
            </p>
            <ul style={{ listStyleType: 'circle' }}>
              <li>Tornitura e fresatura di altissima precisione con macchine fino a 4 assi</li>
              <li>Trattamenti superficiali</li>
              <li>
                Lavorazione di acciaio inossidabile, ottone, bronzo, alluminio, leghe di
                ferro-nichel e titanio
              </li>
            </ul>
            <p>
              <b>Tutti i lotti sono sottoposti a controlli di qualità con attrezzatura specifica</b>
            </p>
            <p>Su richiesta viene effettuata la campionatura del pezzo finale</p>
            <Button variant="primary">Scopri di Piu</Button>
          </StyledCol>
        </StyledRow>
      </StyledContainer>

      <StyledContainer>
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
      </StyledContainer>
    </>
  );
};
