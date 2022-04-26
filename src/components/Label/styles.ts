import styled from 'styled-components';

interface StyledProps {
  hasError?: boolean;
}

export const StyledLabel = styled.label<StyledProps>`
  color: ${(props): string => (props.hasError ? '#ff3243' : '#181818')};
`;
