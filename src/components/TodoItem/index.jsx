// src/components/TodoItem/TodoItem.jsx
import React, { useState } from 'react';
import { TodoItemContainer, TodoItemText, TodoItemButton, TodoItemInput } from './TodoItem.styles';

const TodoItem = ({ todo, editTodo, updateStatus, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // Função para atualizar o texto ao salvar
  const handleEdit = () => {
    editTodo(todo.id, { text: newText });
    setIsEditing(false);
  };

  return (
    <TodoItemContainer>
      {isEditing ? (
        // Aqui temos o campo de input para alterar o nome da tarefa
        <TodoItemInput
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)} // Atualiza o novo texto conforme o usuário digita
        />
      ) : (
        // Exibe o nome da tarefa quando não está em edição
        <TodoItemText>{todo.text}</TodoItemText>
      )}
      
      {/* Se estiver em edição, mostrar botão de salvar, caso contrário, mostrar botão de editar */}
      <TodoItemButton onClick={isEditing ? handleEdit : () => setIsEditing(true)}>
        {isEditing ? 'Salvar' : 'Editar'}
      </TodoItemButton>
      
      {/* Botão para deletar a tarefa */}
      <TodoItemButton onClick={() => deleteTodo(todo.id)}>Deletar</TodoItemButton>
      
      {/* Botão para mover a tarefa de status (exemplo: de 'todo' para 'in-progress') */}
      <TodoItemButton onClick={() => updateStatus(todo.id, todo.status === 'todo' ? 'in-progress' : 'todo')}>
        {todo.status === 'todo' ? 'Iniciar' : 'Voltar'}
      </TodoItemButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
