import { useLayoutEffect, useRef, useState } from 'react';
import * as S from './styles';

export const TransitionPage = (): JSX.Element => {
  const [transitionEnd, setTransitionEnd] = useState(false);
  const transitionContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (transitionContainer.current) {
        transitionContainer.current.style.backgroundColor = 'transparent';
      }
    }, 500);

    setTimeout(() => {
      setTransitionEnd(true);
    }, 1000);
  });

  return (
    <>
      {!transitionEnd ? (
        <S.TransitionPageOverlay
          ref={transitionContainer}
        ></S.TransitionPageOverlay>
      ) : null}
    </>
  );
};
