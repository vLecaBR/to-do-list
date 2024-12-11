// src/components/TodoItem/TodoItem.jsx
import React from 'react';
import { TodoItemContainer, TodoText, Button } from './TodoItem.styles';

const TodoItem = ({ todo, updateStatus, deleteTodo }) => {
  const { id, text, status } = todo;

  const handleStatusChange = (newStatus) => {
    updateStatus(id, newStatus);
  };

  return (
    <TodoItemContainer>
      <TodoText completed={status === 'completed'} onClick={() => handleStatusChange(status === 'completed' ? 'pending' : 'completed')}>
        {text}
      </TodoText>
      <div>
        {status !== 'completed' && (
          <Button onClick={() => handleStatusChange('in-progress')}>Em Progresso</Button>
        )}
        {status !== 'pending' && (
          <Button onClick={() => handleStatusChange('pending')}>Voltar</Button>
        )}
        <Button onClick={() => deleteTodo(id)}>Deletar</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;
