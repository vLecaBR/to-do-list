// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: #F4F7FA; /* Fundo claro */
    color: #333;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 20px; /* Espaçamento entre colunas */
    padding: 20px;
    flex-direction: row;
    overflow: auto;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
