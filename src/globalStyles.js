// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f1f1f1, #ffffff); /* Fundo mais suave */
    color: #333;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    flex-direction: column;
    overflow: hidden;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 20px;
    gap: 30px; /* Espaçamento maior entre as colunas */
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
