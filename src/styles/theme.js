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
   }

`;

export const theme = {
    fontSizes: {
        Header0: '96px',
        Header1: '70px',
        Header2: '60px',
        Header3: '48px',
        Header4: '34px',
        Header5: '24px',
        Header6: '20px',
        Subtitle1: '16px',
        Subtitle2: '14px',
        Body1: '16px',
        Body2: '14px',
        ButtonText1: '16px',
        Caption: '12px'
    },
    fontWeights: {
        Header0: '800',
        Header1: '800',
        Header2: '800',
        Header3: '400',
        Header4: '400',
        Header5: '400',
        Header6: '700',
        Subtitle1: '800',
        Subtitle2: '700',
        Body1: '400',
        Body2: '400',
        ButtonText1: '700',
        Caption: '400',
    },
};
