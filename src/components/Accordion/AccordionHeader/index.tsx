import React from 'react';

interface Props {
  title: string,
}

const AccordionHeader = ({ title }: Props) => (
  <h3>{title}</h3>
)

export default AccordionHeader;
