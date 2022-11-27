import React from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';

interface Props {
  showModal: boolean;
  children: JSX.Element | JSX.Element[];
  noCloseOff?: boolean;
  onCloseModal?: () => void;
}

const Modal = ({ showModal, onCloseModal, children, noCloseOff }: Props): React.ReactPortal => {
  return createPortal(
    showModal && (
      <S.ModalContainer>
        <S.ModalContent>{children}</S.ModalContent>
        <S.ModalOverlay onClick={!noCloseOff ? onCloseModal : undefined} />
      </S.ModalContainer>
    ),
    document.body
  );
};

export default Modal;
