import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Dashboard from '@material-ui/icons/Dashboard';
import History from '@material-ui/icons/History';
import Map from '@material-ui/icons/Map';
import BarChart from '@material-ui/icons/BarChart';
import Layers from '@material-ui/icons/Dashboard';

import Link from 'components/Link';

const menuIcons = { Dashboard, History, Map, BarChart, Layers };

export default function Main({ onMenuClose, items, location }) {
  return <List>
    <div>
      {
        items.map(item => {
          return (
            <Link key={item.path} to={item.path}>
              <ListItem
                onClick={onMenuClose}
                button
                selected={
                  location.pathname === item.path ||
                  (location.pathname === '/' && item.isDefault)
                }
              >
                  <ListItemIcon className="_relative">
                    {React.createElement(menuIcons[item.icon])}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          );
        })
      }
    </div>
  </List>
};
