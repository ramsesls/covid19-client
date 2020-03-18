import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import routes from 'routes';

export default function Content() {
  return (
    <Switch>
      {routes.map(route => <Route {...route} key={route.path || '#'}/>)}
    </Switch>
  );
}
