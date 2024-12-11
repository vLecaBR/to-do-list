// src/components/Header/Header.styles.js
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);  // Fundo claro para contraste
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa, #e2e6ea);
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 18px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s ease;

  &:focus {
    border-color: #4CAF50;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 85%;
  transition: 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

export const FilterButton = styled.button`
  padding: 8px 15px;
  font-size: 14px;
  color: #4CAF50;
  border: 1px solid #4CAF50;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #4CAF50;
    color: #fff;
  }
`;
