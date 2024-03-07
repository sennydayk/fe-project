import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap')

  * {     
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: "Gothic A1", sans-serif;
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