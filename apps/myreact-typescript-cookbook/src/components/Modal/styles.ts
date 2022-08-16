import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 1rem;
  background-color: #fff;
  z-index: 2;
`;

export const ModalOverlay = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgb(0 0 0 / 56%);
`;
