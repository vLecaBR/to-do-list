// src/components/TodoColumn/TodoColumn.styles.js
import styled from 'styled-components';

export const TodoColumnContainer = styled.div`
  width: 320px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: auto;
`;

export const TodoColumnTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  color: #333;
`;
