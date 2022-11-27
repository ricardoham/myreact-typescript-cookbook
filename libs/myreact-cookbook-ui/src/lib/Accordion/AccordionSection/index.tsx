import React from 'react';
import { StyledSection } from './style';
interface Props {
  children?: JSX.Element;
  content?: string;
  showSection: boolean;
}

const AccordionSection = ({ children, content, showSection }: Props): JSX.Element => (
  <StyledSection showSection={showSection}>{content ? content : children}</StyledSection>
);

export default AccordionSection;
