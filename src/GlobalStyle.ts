import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700,900&display=swap');

  html {
    overflow: hidden;
  }

  body {
    margin: 0px;
    font-family: 'Noto Sans KR';
    width: 100%;
    height: 100%;
  }
`;
