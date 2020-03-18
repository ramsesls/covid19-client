import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Link from 'components/Link';

export const mainListItems = (
  <div>
    <ListItem button>
      <Link to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button disabled>
      <Link to="/map">
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="World Map (c. soon...)" />
      </Link>
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="coming soon..." />
    </ListItem>
    <ListItem button disabled>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="coming soon..." />
    </ListItem>
  </div>
);

export const secondaryListItems = (
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
);
