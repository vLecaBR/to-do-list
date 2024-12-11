// src/components/TodoItem/TodoItem.styles.js
import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const TodoText = styled.span`
  flex: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? 'gray' : 'black')};
`;

export const CompleteButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 10px;
`;

export const EditButton = styled.button`
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e08500;
  }
`;
