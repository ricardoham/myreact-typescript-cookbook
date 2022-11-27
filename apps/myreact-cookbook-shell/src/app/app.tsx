import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const MyreactCookbook = React.lazy(() => import('myreact-cookbook/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myreact-cookbook">MyreactCookbook</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<NxWelcome title="myreact-cookbook-shell" />}
        />
        <Route path="/myreact-cookbook" element={<MyreactCookbook />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
