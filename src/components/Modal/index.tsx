import React from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay } from './styles';

interface Props {
  showModal: boolean;
  onCloseModal: () => void;
}

const Modal = ({ showModal, onCloseModal }: Props) => {
  return createPortal(
    showModal && (
      <ModalOverlay onClick={onCloseModal}>
        <ModalContainer>
          <span>Test</span>
        </ModalContainer>
      </ModalOverlay>
    ),
    document.body,
  );
};

export default Modal;
