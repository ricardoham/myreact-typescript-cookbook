import styled from 'styled-components';
import Button from '../components/Button';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Button text="click" onClick={() => console.log('test')} />
    </StyledApp>
  );
}

export default App;
