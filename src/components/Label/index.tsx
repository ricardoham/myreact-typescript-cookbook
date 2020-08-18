import React from 'react';
import { StyledLabel } from './styles';

interface Props {
  id?: number;
  label?: string;
  name: string;
  hasError?: boolean;
}

const Label = ({ id, name, label, hasError }: Props) => (
  <StyledLabel htmlFor={id?.toString() || name} hasError={hasError}>
    {label}
  </StyledLabel>
);

export default Label;
