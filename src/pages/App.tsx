import React, { useState } from 'react';
import Switch from 'components/Switch';
import Routes from 'routes';
import Navbar from 'components/Navbar';

import { MainContainer } from './styles';

const App = () => {
  const [toggleNight, setToggleNight] = useState(false);

  return (
    <MainContainer>
      <Navbar />
      <Switch toggle={toggleNight} onClick={() => setToggleNight(!toggleNight)} />
      <Routes />
    </MainContainer>
  );
};

export default App;
