import React from 'react';
import * as S from './styles';

interface Props {
  title: string;
  isRotate?: boolean;
  onShowSection: () => void;
}

const AccordionHeader = ({ title, onShowSection, isRotate }: Props): JSX.Element => {
  return (
    <S.Accordion onClick={onShowSection}>
      <S.AccordionHeader>{title}</S.AccordionHeader>
      <S.AccordionChevron isRotate={isRotate} />
    </S.Accordion>
  );
};

export default AccordionHeader;
