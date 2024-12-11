// src/components/Modal/Modal.jsx
import React, { useState } from 'react';
import { ModalContainer, ModalContent, ModalCloseButton, Input, Button } from './Modal.styles';

const Modal = ({ todo, closeModal, updateStatus, deleteTodo }) => {
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    updateStatus(todo.id, 'pending'); // ou qualquer outro status
    closeModal();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
        <h2>Editar Tarefa</h2>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nome da Tarefa"
        />
        <Button onClick={handleSave}>Salvar</Button>
        <Button onClick={() => deleteTodo(todo.id)}>Excluir</Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
