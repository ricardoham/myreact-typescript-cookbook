import React from 'react';
import * as S from './styles';

interface Props {
  headerTitle: string;
  onCloseModal?: () => void;
}

const ModalHeader = ({ headerTitle, onCloseModal }: Props): JSX.Element => {
  return (
    <S.ModalHeaderContainer>
      <S.ModalHeaderTitle>{headerTitle}</S.ModalHeaderTitle>
      <S.ModalHeaderButton onClick={onCloseModal}>X</S.ModalHeaderButton>
    </S.ModalHeaderContainer>
  )
}

export default ModalHeader;
