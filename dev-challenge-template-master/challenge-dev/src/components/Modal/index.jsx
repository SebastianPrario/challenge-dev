import React from 'react';
import Styled from './styles';

function Modal({ children, onClose }) {
  return (
    <Styled.ModalWrapper>
      <Styled.ModalContent>
        <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
        {children}
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  );
}

export default Modal;
