import { useState } from 'react';
import Switch from 'libs/myreact-cookbook-ui/src/lib/Switch';
import TransitionPage from 'libs/myreact-cookbook-ui/src/lib/TransitionPage';
import Routes from '../routes';
import Navbar from '../routes/Navbar';
import * as S from './styles';

const App = (): JSX.Element => {
  const [toggleNight, setToggleNight] = useState(false);

  return (
    <S.MainContainer>
      <TransitionPage />
      <S.Header>
        <Navbar />
        <Switch
          styles={{ marginLeft: 'auto' }}
          toggle={toggleNight}
          onClick={(): void => setToggleNight(!toggleNight)}
        />
      </S.Header>
      <Routes />
    </S.MainContainer>
  );
};

export default App;
