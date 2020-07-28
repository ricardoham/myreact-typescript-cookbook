import React from 'react';
import { SwitchContainer, SwitchPoint } from './styles';

interface Props {
  toggle: boolean;
  onClick: () => void;
}

const Switch = ({ toggle, onClick }: Props) => {
  return (
    <SwitchContainer onClick={onClick}>
      <SwitchPoint toggle={toggle} />
    </SwitchContainer>
  );
};

export default Switch;
