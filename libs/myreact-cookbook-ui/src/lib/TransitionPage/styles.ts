import styled, { css, keyframes } from "styled-components";

export const TransitionPageOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #dfe4ea;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: background-color 1s ease;
`;

export const pageAnimation = keyframes`
  10% {

    transform: scale(1, 0.002);
  }
  35% {
    transform: scale(0.2, 0.002);
    opacity: 1;
  }
  50% {
    transform: scale(0.2, 0.002);
    opacity: 0;
  }
  85% {
    transform: scale(1, 0.002);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
  }
`;

export const pageAnimationContent = css`
  animation: ${pageAnimation} 1s ease;
`;

