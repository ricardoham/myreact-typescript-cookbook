import React from 'react';
import { StyledInput } from './styles';

interface Props {
  placeholder?: string;
  value?: string;
  type?: string;
}

export const Input = ({
  value,
  type,
  placeholder,
  ...props
}: Props): JSX.Element => {
  return (
    <StyledInput
      value={value}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};
