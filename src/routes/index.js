import React from 'react';

import { lazy } from 'react';

import NotFound from 'components/NotFound';

import AsyncComponentLoader from 'components/AsyncComponentLoader';

function About() {
  return (
    <div>"About"</div>
  );
}

function Home() {
  return (
    <div>"Home"</div>
  );
}

const routes = [
  {
    exact: true,
    component: AsyncComponentLoader(lazy(() => import('pages/Dashboard'))),
    path: '/',
  },
  {
    exact: true,
    component: AsyncComponentLoader(lazy(() => import('pages/Dashboard'))),
    path: '/dashboard',
  },
  {
    exact: true,
    path: '/home',
    component: Home,
  },
  {
    exact: true,
    path: '/about',
    component: About,
  },
  {
    component: NotFound,
  },
];

export default routes;
