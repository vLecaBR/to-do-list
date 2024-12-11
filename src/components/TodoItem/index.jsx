// src/components/TodoItem/TodoItem.jsx
import React from 'react';
import { TodoItemContainer, TodoText, Button } from './TodoItem.styles';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <TodoItemContainer>
      <TodoText completed={todo.completed} onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </TodoText>
      <Button onClick={() => deleteTodo(todo.id)}>Excluir</Button>
    </TodoItemContainer>
  );
};

export default TodoItem;
