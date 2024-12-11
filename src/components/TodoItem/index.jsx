import React, { useState } from 'react';
import { TodoItemContainer, TodoItemText, TodoItemButton, TodoItemInput } from './TodoItem.styles';
import { useDragItem } from '../../utils/dragAndDrop'; // Importando o hook
import Modal from '../Modal'; // Importando o Modal

const TodoItem = ({ todo, editTodo, updateStatus, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do estado do modal

  // Tornar o item arrastável
  const drag = useDragItem(todo);

  // Função para atualizar o texto ao salvar
  const handleEdit = () => {
    editTodo(todo.id, { text: newText });
    setIsEditing(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  const handleSave = (updatedTodo) => {
    editTodo(updatedTodo.id, updatedTodo);
    setIsModalOpen(false); // Fecha o modal após salvar
  };

  return (
    <>
      <TodoItemContainer ref={drag} onClick={handleOpenModal}> {/* O clique no item inteiro abre o modal */}
        {isEditing ? (
          <TodoItemInput
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)} // Atualiza o novo texto conforme o usuário digita
          />
        ) : (
          <TodoItemText>{todo.text}</TodoItemText> // Exibe o nome da tarefa
        )}
      </TodoItemContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        todo={todo}
        onSave={handleSave}
      />
    </>
  );
};

export default TodoItem;
