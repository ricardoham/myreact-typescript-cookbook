import React from 'react';
import { StyledInput } from './styles';

interface Props {
  placeholder?: string;
  value?: string;
  type?: string;
}

const Input = ({ value, type, placeholder, ...props }: Props) => {
  return <StyledInput value={value} type={type} placeholder={placeholder} {...props} />;
};

export default Input;
