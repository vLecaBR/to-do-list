import React from 'react';
import { ModalBackground, ModalContainer, CloseButton } from './Modal.styles';

const Modal = ({ onClose }) => {
    return (
      <ModalBackground>
        <ModalContainer>
          <CloseButton onClick={onClose}>X</CloseButton>
          {/* Adicione as funcionalidades aqui */}
        </ModalContainer>
      </ModalBackground>
    );
  };
  
  export default Modal;