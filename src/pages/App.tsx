import React, { useState } from 'react';
import Switch from 'components/Switch';
import Routes from 'routes';
import Navbar from 'components/Navbar';

import * as S from './styles';

const App = (): JSX.Element => {
  const [toggleNight, setToggleNight] = useState(false);

  return (
    <S.MainContainer>
      <S.Header>
        <Navbar />
        <Switch
          styles={{ marginLeft: "auto" }}
          toggle={toggleNight}
          onClick={(): void => setToggleNight(!toggleNight)}
        />
      </S.Header>
      <Routes />
    </S.MainContainer>
  );
};

export default App;