import React from 'react';
import * as S from './styles';

interface Props {
  checked: boolean;
}

export const Checkbox = ({ checked }: Props): JSX.Element => {
  return (
    <S.CheckBox>
      <S.CheckBoxBox>
        {checked && (
          <S.CheckBoxCheckMark viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </S.CheckBoxCheckMark>
        )}
      </S.CheckBoxBox>
    </S.CheckBox>
  );
};
