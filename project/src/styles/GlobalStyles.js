import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {     
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: 'Pretendard-Regular';
  }

  input {
    border-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ol, ul, li {
    list-style: none;
  }

  button {
    border-style: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;