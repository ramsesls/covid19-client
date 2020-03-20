import { lazy } from 'react';

import NotFound from 'components/NotFound';

import AsyncComponentLoader from 'components/AsyncComponentLoader';

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
    path: '/analytics',
    component: AsyncComponentLoader(lazy(() => import('pages/Analytics'))),
  },
  {
    exact: true,
    path: '/what-to-do',
    component: AsyncComponentLoader(lazy(() => import('pages/WhatToDo'))),
  },
  {
    component: NotFound,
  },
];

export default routes;
