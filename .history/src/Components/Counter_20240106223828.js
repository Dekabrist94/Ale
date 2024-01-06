import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledNumber = styled.span`
  font-size: 50px;

  @media (max-width: 320px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 25px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 1024px) {
    font-size: 45px;
  }

  @media (max-width: 1440px) {
    font-size: 50px;
  }

  @media (max-width: 2560px) {
    font-size: 55px;
  }
`;

const AdaptiveCounter = ({ targetValue }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !isCounting) {
      setIsCounting(true);
      const duration = 3000; // 3 seconds
      const increment = Math.ceil(targetValue / (duration / 10));
      let currentCount = 0;

      const interval = setInterval(() => {
        currentCount += increment;
        setCount(currentCount);

        if (currentCount >= targetValue) {
          clearInterval(interval);
          setCount(targetValue);
        }
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [inView, isCounting, targetValue]);

  return (
    <StyledContainer fluid>
      <Row>
        <Col ref={ref}>
          <StyledCounter>
            <StyledNumber>{count}</StyledNumber>
          </StyledCounter>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default AdaptiveCounter;
