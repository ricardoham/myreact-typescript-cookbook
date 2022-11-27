import styled from 'styled-components';

interface StyledProps {
  toggle: boolean;
}

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 2.5rem;
  height: 1.2rem;
  border: 2px solid #9c88ff;
  border-radius: 5px;
  cursor: pointer;
`;

export const SwitchPoint = styled.div<StyledProps>`
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.2s;
  border: 1px solid grey;

  ${(props): any => {
    if (props.toggle) {
      return `
        margin-left: 22px;
        transition: .2s;
        background-color: #000;
      `;
    }
  }}
`;
