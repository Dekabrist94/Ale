const Cards = () => {
    return(
  <Row>
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} height={250} />
        <Card.Body>
          <Card.Title>La Nostra Forza</Card.Title>
          <Card.Text>
            "La nostra forza risiede nella precisione delle misure dei nostri pezzi. La misurazione
            accurata dei componenti è alla base della fiducia dei nostri clienti. Per noi, i clienti
            sono il motore del nostro progresso continuo."
          </Card.Text>
          <Button variant="primary">Scopri di Piu</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pezzo} height={250} />
        <Card.Body>
          <Card.Title>Nostri Lavori</Card.Title>
          <Card.Text>
            "La nostra dedizione costante al miglioramento riflette la nostra volontà di crescere
            costantemente. Ogni esperienza non solo ci offre nuove opportunità di apprendimento, ma
            anche il terreno fertile per l'evoluzione.
          </Card.Text>
          <Button variant="primary">Scopri di Piu</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={i5} height={250} />
        <Card.Body>
          <Card.Title>La Nostra Stabilita</Card.Title>
          <Card.Text>
            "La nostra stabilità è la roccia su cui costruiamo il nostro cammino verso l'eccellenza,
            resistendo alle sfide con fiducia. In ogni momento, siamo saldi nel nostro impegno,
            sostenendo la forza di un progresso duraturo e ispiratore."
          </Card.Text>
          <Button variant="primary">Scopri di Piu</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>;
)};
