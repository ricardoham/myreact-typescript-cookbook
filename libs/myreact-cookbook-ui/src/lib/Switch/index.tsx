import React from 'react';
import * as S from './styles';

interface Props<T> {
  styles?: T;
  toggle: boolean;
  onClick: () => void;
}

export const Switch = <T,>({
  toggle,
  onClick,
  styles,
}: Props<T>): JSX.Element => {
  return (
    <S.SwitchContainer onClick={onClick} style={styles as React.CSSProperties}>
      <S.SwitchPoint toggle={toggle} />
    </S.SwitchContainer>
  );
};
