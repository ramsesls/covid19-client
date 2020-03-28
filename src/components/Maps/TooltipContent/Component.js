import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { formatDate } from 'utils';

function TooltipContent({ data, additionName }) {
  if (!data) {
    return <List aria-label="tooltip">
      <ListItem>
        <ListItemText primary={additionName} />
      </ListItem>
      <ListItem>
        <ListItemText primary="N/A" />
      </ListItem>
    </List>;
  };

  return <List aria-label="tooltip">
    <ListItem>
      <ListItemText primary={genTitle(data)} />
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText primary={`Confirmed - ${data.confirmed}`} />
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText primary={`Recovered - ${data.recovered}`} />
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText primary={`Deaths - ${data.deaths}`} />
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText primary={`Active - ${data.active}`} />
    </ListItem>
    <ListItem>
      <ListItemText primary={`Last Update - ${formatDate(data.lastUpdate)}`} />
    </ListItem>
  </List>;
}

function genTitle(data) {
  const title = `${data.countryRegion}${data.provinceState ? ` (${data.provinceState})`: ''}`;

  if (data.countryRegion === 'US') {
    return data.combinedKey || title;
  }

  return title;
}

export default TooltipContent;
