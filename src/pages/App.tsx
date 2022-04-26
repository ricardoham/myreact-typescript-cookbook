import React, { useState } from 'react';
import Switch from 'components/Switch';
import Routes from 'routes';
import Navbar from 'components/Navbar';

import { MainContainer } from './styles';

const App = (): JSX.Element => {
  const [toggleNight, setToggleNight] = useState(false);

  return (
    <MainContainer>
      <Navbar />
      <Switch toggle={toggleNight} onClick={(): void => setToggleNight(!toggleNight)} />
      <Routes />
    </MainContainer>
  );
};

export default App;
