// src/components/TodoItem/TodoItem.jsx
import React from 'react';
import { TodoItemContainer, TodoText, Button } from './TodoItem.styles';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({ todo, index, updateStatus, deleteTodo }) => {
  const { id, text, status } = todo;

  const handleStatusChange = (newStatus) => {
    updateStatus(id, newStatus);
  };

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <TodoItemContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TodoText completed={status === 'completed'}>
            {text}
          </TodoText>
          <div>
            {status !== 'completed' && (
              <Button onClick={() => handleStatusChange('in-progress')}>Em andamento</Button>
            )}
            {status !== 'pending' && (
              <Button onClick={() => handleStatusChange('pending')}>Voltar</Button>
            )}
            <Button onClick={() => deleteTodo(id)}>Deletar</Button>
          </div>
        </TodoItemContainer>
      )}
    </Draggable>
  );
};

export default TodoItem;
