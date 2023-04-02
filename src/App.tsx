import { FC } from 'react';
import { Router, Outlet, Link } from '@tanstack/react-location';
import { routes, location } from './Router';

export const App:FC = () => {
  return (
    <Router routes={routes} location={location}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Signup</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </div>
      <Outlet /> {/* パスが一致した際にレンダリングされるコンポーネント */}
    </Router>
  );
}
