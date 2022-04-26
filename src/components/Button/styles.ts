import styled from 'styled-components';

interface StyledProps {
  fill?: string;
  color?: string;
}

const StyledButton = styled.button<StyledProps>`
  border: none;
  background: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  color: #fff;
  ${(props): string => {
    switch (props.color) {
      case 'secondary':
        return `
          background-color: ${props.fill !== 'outline' && '#be9fe1'};
          border: solid 1px #be9fe1;
          color: ${props.fill === 'outline' && '#be9fe1'};
        `;
      case 'danger':
        return `
          background-color: ${props.fill !== 'outline' && '#ea5455'};
          border: solid 1px #ea5455;
          color: ${props.fill === 'outline' && '#ea5455'};
        `;
      default:
        return `
          background-color: ${props.fill !== 'outline' && '#43d8c9'};
          border: solid 1px #43d8c9;
          color: ${props.fill === 'outline' && '#43d8c9'};
        `;
    }
  }};
`;

export { StyledButton };
