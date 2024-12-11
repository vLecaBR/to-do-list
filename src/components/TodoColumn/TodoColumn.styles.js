import styled from 'styled-components';

export const TodoColumnContainer = styled.div`
  width: 300px;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 400px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const TodoColumnTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

export const TodoColumnButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const TodoColumnList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 10px;
`;

export const TodoColumnFooter = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #888;
`;
