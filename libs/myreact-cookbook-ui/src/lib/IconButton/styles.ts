import styled from "styled-components";

interface StyledProps {
  color?: string;
  fill?: string;
  disabled?: boolean;
}

export const IconButtonContainer = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  padding: 5px;
  border: none;
  border-radius: 4px;
  width: 1.4rem;
  height: 1.4rem;
  cursor: pointer;
  ${(props): string => {
    if (props.disabled) {
      return `
        background-color: #EEEEEE;
        border: solid 1px #DDDDDD;
        color: #73777B;
        cursor: auto;
      `;
    } else {
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
    }
  }};
`;
