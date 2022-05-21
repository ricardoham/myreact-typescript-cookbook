import styled from 'styled-components';
import { FaChevronCircleDown } from 'react-icons/fa';

interface Props {
  isRotate?: boolean;
}

export const Accordion = styled.div`
  display: flex;
  cursor: pointer;
  border: 1px solid grey;
  padding: 10px;
  line-height: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const AccordionHeader = styled.span`
  flex: 1;
`;

export const AccordionChevron = styled(FaChevronCircleDown)`
  margin-right: 10px;
  transition: all 0.35s 0.25s;
  transform: ${(props: Props): string => (props.isRotate ? 'rotate(-180deg)' : 'rotate(0)')};
`;
