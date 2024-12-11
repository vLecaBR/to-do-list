// src/components/TodoColumn/TodoColumn.jsx
import React from 'react';
import { TodoColumnContainer, TodoColumnTitle } from './TodoColumn.styles';
import TodoItem from '../TodoItem';

const TodoColumn = ({ title, todos, updateStatus, deleteTodo }) => {
  return (
    <TodoColumnContainer>
      <TodoColumnTitle>{title}</TodoColumnTitle>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoColumnContainer>
  );
};

export default TodoColumn;
