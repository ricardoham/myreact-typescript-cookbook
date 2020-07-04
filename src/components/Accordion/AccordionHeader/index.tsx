import React from 'react';
import { StyledAccordion } from './styles';

interface Props {
  title: string,
  isRotate?: boolean,
  onShowSection: () => void,
}



const AccordionHeader = ({ title, onShowSection, isRotate }: Props) => {
 return <StyledAccordion onClick={onShowSection}>
    <StyledAccordion.Header>{title}</StyledAccordion.Header>
    <StyledAccordion.Chevron isRotate={isRotate}/>
  </StyledAccordion>
}

export default AccordionHeader;
