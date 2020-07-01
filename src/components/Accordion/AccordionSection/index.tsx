import React from 'react';

interface Props {
  children?: JSX.Element,
  content?: string,
}

const AccordionSection = ({ children, content }: Props) => (
  <div>{content ? content : children}</div>
)

export default AccordionSection;
