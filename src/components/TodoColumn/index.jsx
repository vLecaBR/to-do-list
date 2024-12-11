// src/components/TodoColumn/TodoColumn.jsx
import React from 'react';
import { TodoColumnContainer, TodoColumnTitle } from './TodoColumn.styles';
import TodoItem from '../TodoItem';
import { Droppable } from 'react-beautiful-dnd';

const TodoColumn = ({ title, todos, columnId, updateStatus, deleteTodo }) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <TodoColumnContainer ref={provided.innerRef} {...provided.droppableProps}>
          <TodoColumnTitle>{title}</TodoColumnTitle>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              updateStatus={updateStatus}
              deleteTodo={deleteTodo}
            />
          ))}
          {provided.placeholder}
        </TodoColumnContainer>
      )}
    </Droppable>
  );
};

export default TodoColumn;
