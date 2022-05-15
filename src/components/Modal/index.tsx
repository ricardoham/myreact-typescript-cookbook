import React from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalOverlay } from './styles';

interface Props {
  showModal: boolean;
  children: JSX.Element | JSX.Element[];
  noCloseOff?: boolean;
  onCloseModal: () => void;
}

const Modal = ({ showModal, onCloseModal, children, noCloseOff }: Props): React.ReactPortal => {
  return createPortal(
    showModal && (
      <ModalOverlay onClick={!noCloseOff ? onCloseModal : undefined}>
        <ModalContainer>
          {children}
        </ModalContainer>
      </ModalOverlay>
    ),
    document.body,
  );
};

export default Modal;
