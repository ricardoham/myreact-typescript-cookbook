import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const Turtle: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

Turtle.Img = styled.img`
  width: 4rem;
  cursor: pointer;
`

Turtle.Name = styled.span`
  color: #181818;
  font-size: 1rem;
`;
