import React from 'react';
import * as S from './styles';

interface Props {
  children: JSX.Element;
}

const ModalBody = ({ children }: Props): JSX.Element => {
  return (
    <S.ModalBodyContainer>
      {children}
    </S.ModalBodyContainer>
  )
}

export default ModalBody;
