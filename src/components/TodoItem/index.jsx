// src/components/TodoItem/TodoItem.jsx
import React, { useState } from 'react';
import { TodoItemContainer, TodoItemText, TodoItemButton, TodoItemInput } from './TodoItem.styles';
import { useDragItem } from '../../utils/dragAndDrop'; // Importando o hook

const TodoItem = ({ todo, editTodo, updateStatus, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // Função para atualizar o texto ao salvar
  const handleEdit = () => {
    editTodo(todo.id, { text: newText });
    setIsEditing(false);
  };

  // Tornar o item arrastável
  const drag = useDragItem(todo);

  return (
    <TodoItemContainer ref={drag}>
      {isEditing ? (
        <TodoItemInput
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)} // Atualiza o novo texto conforme o usuário digita
        />
      ) : (
        <TodoItemText>{todo.text}</TodoItemText>
      )}
      
      <TodoItemButton onClick={isEditing ? handleEdit : () => setIsEditing(true)}>
        {isEditing ? 'Salvar' : 'Editar'}
      </TodoItemButton>
      <TodoItemButton onClick={() => deleteTodo(todo.id)}>Deletar</TodoItemButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
