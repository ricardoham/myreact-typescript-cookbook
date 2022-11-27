import styled from "styled-components";

export const ImageSliderContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  border-radius: 8px;
  max-width: 520px;
  box-shadow: 8px 6px 4px 0px #888888;
  @media only screen and (max-width: 600px) {
    max-width: 300px;
  }
`;

export const ImageControlContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  align-items: center;
  margin: 1rem;
`;

export const ImageSliderPageNumber = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;
