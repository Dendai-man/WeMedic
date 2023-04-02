import { Route, ReactLocation } from '@tanstack/react-location';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import type { Post } from './types';

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  // {
  //   path: 'posts',
  //   children: [
  //     {
  //       path: '/',
  //       element: <Home />,
  //     },
  //     {
  //       path: ':postId',
  //       element: <PostDetail />,
  //     },
  //   ],
  // },
];