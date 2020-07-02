import React from 'react';
import { StyledAccordion } from './styles';

interface Props {
  title: string,
  onShowSection: () => void,
}

const AccordionHeader = ({ title, onShowSection }: Props) => (
  <StyledAccordion onClick={onShowSection}>
    <h3>{title}</h3>
  </StyledAccordion>
)

export default AccordionHeader;
