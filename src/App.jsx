import { Outlet, useLocation } from 'react-router-dom';
import User from '@layouts/User';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <User location={location}>
        <Outlet />
      </User>
    </div>
  );
}

export default App;
