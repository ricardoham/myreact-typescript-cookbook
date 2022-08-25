import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  fill?: 'filled' | 'outline';
  color?: 'primary' | 'secondary' | 'danger';
  text?: string;
  icon?: string;
  children?: JSX.Element;
  onClick?: () => void;
}

const Button = ({
  type,
  fill,
  color,
  text,
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      type={!type ? 'button' : type}
      fill={fill}
      color={color}
      onClick={onClick}
    >
      {text || children}
    </StyledButton>
  );
};

export default Button;
