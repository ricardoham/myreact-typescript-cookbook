import React from 'react';
import * as S from './styles';

export interface IconButtonProps {
  color?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  fill?: 'filled' | 'outline';
  icon: JSX.Element | string;
  onClick?: () => void;
}

const IconButton = ({
  color,
  fill,
  icon,
  onClick,
  disabled,
}: IconButtonProps): JSX.Element => {
  return (
    <S.IconButtonContainer
      color={color}
      fill={fill}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </S.IconButtonContainer>
  );
};

export default IconButton;
