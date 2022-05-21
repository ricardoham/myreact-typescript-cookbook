import styled from "styled-components";

interface StyledProps {
  color?: string;
  fill?: string;
}

export const IconButtonContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  padding: 5px;
  border: none;
  border-radius: 4px;
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
  width: 1rem;
  height: 1rem;
`;
