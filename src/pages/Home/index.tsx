import React from 'react';
import * as S from './styles';

const Home = (): JSX.Element => {
  return (
    <S.HomeContainer>
      <S.HomeSection>
        <S.HeaderText>
          <h3>About this work</h3>
        </S.HeaderText>
        <p>
          This is a project with a compile of TypeScript React common used components, with a mix of React and Redux usage.
        </p>
      </S.HomeSection>
      <S.HomeImage src="/logo512.png" width={350} />
    </S.HomeContainer>
  );
};

export default Home;