import React, { useState } from 'react';
import Switch from 'components/Switch';
import Routes from 'routes';
import Navbar from 'components/Navbar';

const App = () => {
  const [toggleNight, setToggleNight] = useState(false);

  return (
    <main>
      <Switch toggle={toggleNight} onClick={() => setToggleNight(!toggleNight)} />
      <Navbar />
      <Routes />
    </main>
  );
};

export default App;
