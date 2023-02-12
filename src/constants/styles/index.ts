import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 62.5%;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    src: url('./font/NeueHaasUnica-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    box-sizing: border-box;
    min-height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #191919;
  }

  input, textarea, label, button, ::placeholder {
   font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      cursor: pointer;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }


  input, textarea {
    border-radius: 0;
    -webkit-appearance: none;
    appearance: none;
  }

`;

export default GlobalStyle;
