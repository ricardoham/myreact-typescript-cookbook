import React, { useState } from 'react';
import Switch from '../components/Switch';

const Home = () => {
  const [toggleNight, setToggleNight] = useState(false);

  return (
    <div>
      <Switch toggle={toggleNight} onClick={() => setToggleNight(!toggleNight)} />
    </div>
  );
};

export default Home;
