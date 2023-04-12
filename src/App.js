import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

const StyledText = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const App = () => {
  const [index, setIndex] = useState(0);
  const texts = ['기획자', '디자이너', '개발자'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIndex = Math.floor(scrollY / window.innerHeight);
       setIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },
    []);

  return (
    <StyledWrapper>
      <StyledText>
        [{texts[index]}], 화이팅!
      </StyledText>
    </StyledWrapper>
  );
};

export default App;
