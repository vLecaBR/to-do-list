import React from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
} from "./Modal.styles";
import Checklist from "./Checklist";
import DateSelector from "./DateSelector";
import Labels from "./Labels";
import Comments from "./Comments";

const Modal = ({ onClose }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Planejamento de Projeto</h2>
        <Checklist />
        <DateSelector />
        <Labels />
        <Comments />
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
