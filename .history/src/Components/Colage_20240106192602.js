import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import big1 from '../img/b1.jpg';
import ok15 from '../img/ok15.jpg';
import dos1 from '../img/dos1.jpg';

const ImageCollageContainer = styled(Container)`
  margin-top: 20px;
`;

const ImageCollage = () => {
  return (
    <ImageCollageContainer>
      <Container>
        <Row style={{ paddingTop: '2rem' }}>
          <Col className="justify-content-start">
            <img src={big1} alt="img1" height={'100%'} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ margin: '0 auto', paddingLeft: '30rem' }}>
          <Col className="justify-content-end">
            <img src={ok15} alt="img1" height={'100%'} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ margin: '0 auto' }}>
          <Col className="justify-content-start">
            <img src={dos1} alt="img1" height={'100%'} />
          </Col>
        </Row>
      </Container>
    </ImageCollageContainer>
  );
};

export default ImageCollage;
