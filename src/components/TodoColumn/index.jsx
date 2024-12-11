// src/components/TodoColumn/TodoColumn.jsx
import React from 'react';
import TodoItem from '../TodoItem';
import { TodoColumnContainer, TodoColumnTitle, AddButton } from './TodoColumn.styles';
import { useDropColumn } from '../../utils/dragAndDrop';

const TodoColumn = ({ title, todos, addTodo, editTodo, updateStatus, deleteTodo }) => {
  // Hook para a coluna, passando o status da coluna para atualizar as tarefas ao ser soltas
  const drop = useDropColumn(title.toLowerCase(), updateStatus);

  return (
    <TodoColumnContainer ref={drop}>
      <TodoColumnTitle>{title}</TodoColumnTitle>
      <AddButton onClick={addTodo}>+</AddButton>
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
