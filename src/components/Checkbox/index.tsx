import React from 'react';
import { CheckBox } from './styles';

interface Props {
  checked: boolean;
}

const Checkbox = ({ checked }: Props) => {
  return (
    <CheckBox>
      <CheckBox.Box>
        {checked && (
          <CheckBox.CheckMark viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </CheckBox.CheckMark>
        )}
      </CheckBox.Box>
    </CheckBox>
  );
};

export default Checkbox;
