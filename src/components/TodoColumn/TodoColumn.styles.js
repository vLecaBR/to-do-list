// src/components/TodoColumn/TodoColumn.styles.js
import styled from 'styled-components';

export const TodoColumnContainer = styled.div`
  background: #f4f5f7;
  width: 300px;
  min-height: 500px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TodoColumnTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  background-color: #5e81f4;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4a6edb;
  }
`;
