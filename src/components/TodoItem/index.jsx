// src/components/TodoItem/TodoItem.jsx
import React from 'react';
import { TodoItemContainer, TodoText, Button } from './TodoItem.styles';

const TodoItem = ({ todo, updateStatus, deleteTodo }) => {
  const { id, text, status } = todo;

  return (
    <TodoItemContainer>
      <TodoText completed={status === 'completed'}>
        {text}
      </TodoText>
      <div>
        {status !== 'completed' && (
          <Button onClick={() => updateStatus(id, 'in-progress')}>Em andamento</Button>
        )}
        {status !== 'pending' && (
          <Button onClick={() => updateStatus(id, 'pending')}>Voltar</Button>
        )}
        <Button onClick={() => deleteTodo(id)}>Deletar</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;
