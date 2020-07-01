import React, { useState } from 'react';
import AccordionHeader from './AccordionHeader';

import { AccordionContainer } from './styles';

interface Props {
  children?: JSX.Element,
  items?: AccordionItems[],
  title?: string,
  content?: string,
}

interface AccordionItems {
  title: string,
  content: string,
}

const Accordion = ({ children, items, title, content }: Props) => {
  const [collapase, setCollapse] = useState(false);

  return (
    <AccordionContainer>
      <AccordionHeader title={title} />
    </AccordionContainer>
  )
}

export default Accordion;
