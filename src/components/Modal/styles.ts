import styled from 'styled-components';

export const ModalContainer = styled.div`
  min-width: 800px;
  border-radius: 4px;
  padding: 1rem;
  background-color: #fff;
`;

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
