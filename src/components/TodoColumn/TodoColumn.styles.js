// src/components/TodoColumn/TodoColumn.styles.js
import styled from 'styled-components';

export const TodoColumnContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f4f5f7;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 400px;
  display: flex;
  flex-direction: column;
`;

export const TodoColumnTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  background-color: #4CAF50;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #45a049;
  }
`;
