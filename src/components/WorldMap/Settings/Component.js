import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

import { isMobile } from 'utils';

const useStyles = makeStyles(theme => ({
  root: {
    position: isMobile ? 'relative' : 'absolute',
    width: isMobile ? '100%' : 330,
    height: 100,
    'padding': 20,
    'z-index': 1,
  },
  title: {
    'margin-bottom': 10, 
  },
}));

export default function Settings({ value, onChange }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <FormControl className="full-size" component="fieldset">
        <InputLabel id="map-settings">Highlighting (distribution) Criterion</InputLabel>
        <Select
          labelId="map-settings"
          id="map-settings"
          value={value}
          onChange={onChange}
        >
          <MenuItem value="confirmed">Confirmed</MenuItem>
          <MenuItem value="recovered">Recovered</MenuItem>
          <MenuItem value="deaths">Deaths</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="population_confirmed">Confirmed per 10M inhabitants</MenuItem>
          <MenuItem value="population_recovered">Recovered per 10M inhabitants</MenuItem>
          <MenuItem value="population_deaths">Deaths per 10M inhabitants</MenuItem>
          <MenuItem value="population_active">Active per 10M inhabitants</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}
