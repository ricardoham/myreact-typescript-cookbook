import React, { useState } from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionSection from './AccordionSection';

import { AccordionContainer } from './styles';

interface Props {
  children?: JSX.Element;
  items?: AccordionItems[];
  title?: string;
  content?: string;
}

interface AccordionItems {
  title: string;
  content: string;
}

const Accordion = ({ children, items, title, content }: Props) => {
  const [collapase, setCollapse] = useState(false);

  const renderSections = () =>
    items?.map((section: AccordionItems) => (
      <>
        <AccordionHeader isRotate={collapase} title={section.title} onShowSection={handleAccordionSection} />
        <AccordionSection content={section.content} showSection={collapase} />
      </>
    ));

  const handleAccordionSection = () => {
    setCollapse(!collapase);
  };

  return (
    <AccordionContainer>
      {items && items.length > 0 ? (
        renderSections()
      ) : (
        <>
          <AccordionHeader title={title || ''} onShowSection={handleAccordionSection} isRotate={collapase} />
          {children ? (
            <AccordionSection showSection={collapase}>{children}</AccordionSection>
          ) : (
            <AccordionSection content={content} showSection={collapase} />
          )}
        </>
      )}
    </AccordionContainer>
  );
};

export default Accordion;
