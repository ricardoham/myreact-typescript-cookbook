import React from 'react';
import * as S from './styles';

export interface IconButtonProps {
  color?: 'primary' | 'secondary' | 'danger';
  fill?: 'filled' | 'outline';
  icon: JSX.Element | string;
  onClick: () => void;
}

const IconButton = ({ color, fill, icon, onClick }: IconButtonProps): JSX.Element => {
  return (
    <S.IconButtonContainer color={color} fill={fill} onClick={onClick}>
      {icon}
    </S.IconButtonContainer>
  )
}

export default IconButton;
