import React from 'react';

import { lazy } from 'react';

import NotFound from 'components/NotFound';

import AsyncComponentLoader from 'components/AsyncComponentLoader';

function About() {
  return (
    <div>"About"</div>
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
    path: '/map',
    component: AsyncComponentLoader(lazy(() => import('pages/Map'))),
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
