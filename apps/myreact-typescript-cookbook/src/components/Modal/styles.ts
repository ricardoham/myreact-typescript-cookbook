import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: -150px;
  justify-content: center;
  align-items: center;
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
