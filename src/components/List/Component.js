import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { useLocation } from 'react-router-dom';

import Link from 'components/Link';

export const MainList = _ => {
  const location = useLocation();

  return <List>
    <div>
      <ListItem button selected={location.pathname === '/dashboard'}>
        <Link to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItem>
      <ListItem button selected={location.pathname === '/analytics'}>
        <Link to="/analytics">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </Link>
      </ListItem>
      <ListItem button selected={location.pathname === '/map'}>
        <Link to="/map">
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="World Map" />
        </Link>
      </ListItem>
      <ListItem button disabled>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="coming soon..." />
      </ListItem>
    </div>
  </List>
};

export const SecondaryList = _ => {
  return <List>
    <div>
      <ListSubheader inset>Reports</ListSubheader>
      <ListItem button disabled>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="coming soon..." />
      </ListItem>
      <ListItem button disabled>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="coming soon..." />
      </ListItem>
      <ListItem button disabled>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="coming soon..." />
      </ListItem>
    </div>
  </List>
};
