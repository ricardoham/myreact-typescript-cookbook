import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
`;

export const ModalOverlay = styled.div`
  z-index: 1;
  opacity: 0.5;
  background-color: #000;
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
