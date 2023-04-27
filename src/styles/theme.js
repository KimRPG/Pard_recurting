import { createGlobalStyle } from 'styled-components';


// GlobalStyle을 생성합니다.
export const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'NanumSquare Neo';
    src: url("./assets/font/NanumSquareNeo-bRg.ttf'");
    font-weight: 400;
    font-style: normal;
  } */

  @font-face {
    font-family: 'NanumSquare Neo';
    src: url("./assets/font/NanumSquareNeo-cBd.ttf") format("ttf");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumSquare Neo';
  src: url("./assets/font/NanumSquareNeo-dEb.ttf") format("ttf");
    font-weight: 800;
    font-style: normal;
  }

  body{
      font-family: "NanumSquare Neo";
      background-color: #1A1A1A;
   }

`;
// https://nekocalc.com/px-to-rem-converter <<< rem 변환기 
export const theme = {
    fontSizes: {
        Header0: '6.6667vw',
        Header1: '4.8611vw',
        Header2: '4.1667vw', 
        Header3: '3.3333vw',
        Header4: '2.3611vw',
        Header5: '1.6667vw',
        Header6: '1.3889vw',
        Header7: '2.7778vw',
        Header8: '2.0833vw',
        Subtitle1: '1.1111vw',
        Subtitle2: '0.9722vw',
        Subtitle3: '1.6667vw',
        Body1: '1.1111vw',
        Body2: '0.9722vw',
        ButtonText1: '1.1111vw',
        Caption1: '0.8333vw',
        Caption: '0.8333vw'
    },
    fontWeights: {
        Header0: '800',
        Header1: '800',
        Header2: '800',
        Header3: '400',
        Header4: '400',
        Header5: '700',
        Header6: '700',
        Header7: '800',
        Header8: '800',
        Subtitle1: '800',
        Subtitle2: '700',
        Subtitle3: '400',
        Body1: '400',
        Body2: '400',
        ButtonText1: '700',
        Caption1: '400',
        Captiom: '400'
    },
    NavBarColor: {
        navbarColor: '#1A1A1A', // Navbar의 색상
    }
};
