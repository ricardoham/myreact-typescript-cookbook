import { StyledLabel } from './styles';

interface Props {
  id?: string;
  label?: string;
  name: string;
  hasError?: boolean;
}

export const Label = ({ id, name, label, hasError }: Props): JSX.Element => (
  <StyledLabel htmlFor={id?.toString() || name} hasError={hasError}>
    {label}
  </StyledLabel>
);
