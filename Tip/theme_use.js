import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme'; // 위에 2개의 내용을 import한다.

const Header1 = styled.div` // 제목은 theme파일에 적힌 내용과 동일하게 컴포넌트를 만들어준다.
  font-size: ${props => props.theme.fontSizes.Header1}; // props 값을 원하는 theme 파일 내용으로 가져온 후 적용한다. 
  font-weight: ${props => props.theme.fontWeights.Header1};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line; // 줄 바꿈 가능하게 하는 css, <br>을 써도 된다.
`;
const Header2 = styled.div`
  font-size: ${props => props.theme.fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
`;
const Header3 = styled.div`
  font-size: ${props => props.theme.fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
`;
const Header4 = styled.div`
  font-size: ${props => props.theme.fontSizes.Header4};
  font-weight: ${props => props.theme.fontWeights.Header4};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
`;
const Header5 = styled.div`
  font-size: ${props => props.theme.fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
`;



function Theme() {

    return (
        <PartDiv>
             <ThemeProvider theme={theme}>
            <Header1>Header1</Header2>
            <Header2>Header2</Header2>
            <Header3>Header3</Header3>
            <Header4>Header4</Header4>
            <Header5>Header5</Header5>
            </ThemeProvider>
        </PartDiv>
    );
}

export default HomePartner;