// src/components/TodoColumn/TodoColumn.jsx
import React from 'react';
import TodoItem from '../TodoItem';
import { TodoColumnContainer, TodoColumnTitle, AddButton } from './TodoColumn.styles';

const TodoColumn = ({ title, todos, addTodo, updateStatus, deleteTodo, handleDragStart, handleDrop, handleDragOver }) => {
  return (
    <TodoColumnContainer onDrop={handleDrop} onDragOver={handleDragOver}>
      <TodoColumnTitle>{title}</TodoColumnTitle>
      <AddButton onClick={addTodo}>+</AddButton>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
          handleDragStart={handleDragStart}
        />
      ))}
    </TodoColumnContainer>
  );
};

export default TodoColumn;
