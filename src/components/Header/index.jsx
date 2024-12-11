// src/components/Header/Header.jsx
import React from 'react';
import { HeaderContainer, Input, Button, FilterContainer, FilterButton } from './Header.styles';

const Header = ({ newTodo, setNewTodo, addTodo, setFilter }) => {
  return (
    <HeaderContainer>
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicione uma tarefa"
      />
      <Button onClick={addTodo}>Adicionar</Button>
      <FilterContainer>
        <FilterButton onClick={() => setFilter("all")}>Todas</FilterButton>
        <FilterButton onClick={() => setFilter("pending")}>Pendentes</FilterButton>
        <FilterButton onClick={() => setFilter("completed")}>Concluídas</FilterButton>
      </FilterContainer>
    </HeaderContainer>
  );
};

export default Header;
