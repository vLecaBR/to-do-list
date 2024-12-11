// src/components/TodoList/TodoList.jsx
import React from 'react';
import TodoItem from '../TodoItem';
import { TodoListContainer } from './TodoList.styles';

const TodoList = ({ todos, toggleTodo, deleteTodo, setFilter }) => {
  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
