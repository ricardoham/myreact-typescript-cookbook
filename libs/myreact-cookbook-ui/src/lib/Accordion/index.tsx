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

const Accordion = ({ children, items, title, content }: Props): JSX.Element => {
  const [collapse, setCollapse] = useState(false);

  const renderSections = (): JSX.Element[] | undefined =>
    items?.map((section: AccordionItems) => (
      <>
        <AccordionHeader isRotate={collapse} title={section.title} onShowSection={handleAccordionSection} />
        <AccordionSection content={section.content} showSection={collapse} />
      </>
    ));

  const handleAccordionSection = (): void => {
    setCollapse(!collapse);
  };

  return (
    <AccordionContainer>
      {items && items.length > 0 ? (
        renderSections()
      ) : (
        <>
          <AccordionHeader title={title || ''} onShowSection={handleAccordionSection} isRotate={collapse} />
          {children ? (
            <AccordionSection showSection={collapse}>{children}</AccordionSection>
          ) : (
            <AccordionSection content={content} showSection={collapse} />
          )}
        </>
      )}
    </AccordionContainer>
  );
};

export default Accordion;
