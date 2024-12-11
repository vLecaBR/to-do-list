// src/components/TodoItem/TodoItem.jsx
import React, { useState } from 'react';
import { TodoItemContainer, TodoText, CompleteButton, EditButton } from './TodoItem.styles';
import Modal from '../Modal';

const TodoItem = ({ todo, updateStatus, deleteTodo, handleDragStart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.status === 'completed');

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    updateStatus(todo.id, isCompleted ? 'pending' : 'completed');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <TodoItemContainer
        draggable
        onDragStart={(e) => handleDragStart(e, todo.id)}
      >
        <CompleteButton onClick={toggleCompletion}>{isCompleted ? '✔️' : '⭕'}</CompleteButton>
        <TodoText completed={isCompleted} onClick={openModal}>
          {todo.text}
        </TodoText>
        <EditButton onClick={openModal}>Editar</EditButton>
      </TodoItemContainer>

      {isModalOpen && (
        <Modal todo={todo} closeModal={closeModal} updateStatus={updateStatus} deleteTodo={deleteTodo} />
      )}
    </>
  );
};

export default TodoItem;
