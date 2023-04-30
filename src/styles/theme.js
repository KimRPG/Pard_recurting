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

export const theme = {
  Web_fontSizes: {
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
  Mob_fontSizes: {
    Header0: '25.6000vw',
    Header1: '18.6667vw',
    Header2: '16.0000vw',
    Header3: '12.8000vw',
    Header4: '9.0667vw',
    Header5: '6.4000vw',
    Header6: '5.3333vw',
    Header7: '10.6667vw',
    Header8: '8.0000vw',
    Subtitle1: '4.2667vw',
    Subtitle2: '3.7333vw',
    Subtitle3: '6.4000vw',
    Body1: '4.2667vw',
    Body2: '3.7333vw',
    ButtonText1: '4.2667vw',
    Caption1: '3.2000vw',
    Caption: '3.2000vw'
  },
  NavBarColor: {
    navbarColor: '#1A1A1A', // Navbar의 색상
  }
};
