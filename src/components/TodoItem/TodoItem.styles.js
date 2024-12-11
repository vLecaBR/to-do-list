// src/components/TodoItem/TodoItem.styles.js
import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  background: #ffffff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TodoItemText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const TodoItemInput = styled.input`
  font-size: 1rem;
  padding: 5px;
  margin: 0;
  width: 100%;
`;

export const TodoItemButton = styled.button`
  background-color: #5e81f4;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 5px;

  &:hover {
    background-color: #4a6edb;
  }
`;
