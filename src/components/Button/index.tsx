import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  fill: 'filled' | 'outline';
  color: 'primary' | 'secondary' | 'ghost' | 'danger';
  text?: string;
  icon?: string;
  children?: JSX.Element;
  onClick: () => void;
}

const Button = ({ type, fill, color, text, icon, children, onClick }: ButtonProps) => {
  return (
    <StyledButton type={!type ? 'button' : type} fill={fill} color={color} onClick={onClick}>
      {text || children}
    </StyledButton>
  );
};

export default Button;
