// src/components/TodoColumn/TodoColumn.styles.js
import styled from 'styled-components';

export const TodoColumnContainer = styled.div`
  width: 30%; /* A largura de cada coluna é de 30% */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  height: 80vh;
`;

export const TodoColumnTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;
