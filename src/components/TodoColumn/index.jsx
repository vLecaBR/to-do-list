// src/components/TodoColumn/TodoColumn.jsx
import React from 'react';
import TodoItem from '../TodoItem';
import { TodoColumnContainer, TodoColumnTitle, TodoColumnButton } from './TodoColumn.styles';
import { useDropColumn } from '../../utils/dragAndDrop'; // Importando o hook

const TodoColumn = ({ title, status, todos, addTodo, editTodo, updateStatus, deleteTodo }) => {
  const drop = useDropColumn(status, updateStatus);

  return (
    <TodoColumnContainer ref={drop}>
      <TodoColumnTitle>{title}</TodoColumnTitle>
      <TodoColumnButton onClick={addTodo}>+</TodoColumnButton>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoColumnContainer>
  );
};

export default TodoColumn;
