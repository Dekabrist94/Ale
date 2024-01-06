import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const textData = {
  // Определите свои данные здесь, если необходимо
};

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledPrefix = styled.span`
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const StyledNumber = styled.span`
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const StyledSuffix = styled.span`
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
};

const AdaptiveCounter = ({ initialValue, targetValue, duration, prefix, suffix }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const increment = Math.ceil((targetValue - initialValue) / (duration / 10));
    let currentCount = 0;

    const handleScroll = () => {
      if (!isCounting) {
        setIsCounting(true);
        const interval = setInterval(() => {
          currentCount += increment;
          setCount(currentCount);

          if (
            (increment > 0 && currentCount >= targetValue) ||
            (increment < 0 && currentCount <= targetValue)
          ) {
            clearInterval(interval);
            setCount(targetValue);
          }
        }, 10);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCounting, initialValue, targetValue, duration]);

  return (
    <StyledContainer fluid>
      <Row xs={1} md={1} lg={3} xl={3}>
        {/* Используйте Object.keys(textData), если у вас есть текстовые данные для отображения */}
        {Object.keys(textData).map((key, index) => (
          <Col key={key}>
            <Fade
              bottom={index % 2 === 0}
              top={index % 2 !== 0}
              left={index % 2 === 0}
              right={index % 2 !== 0}
              delay={index * 200}
            >
              <StyledCounter>
                {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
                <StyledNumber>{count}</StyledNumber>
                {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
              </StyledCounter>
            </Fade>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default AdaptiveCounter;
