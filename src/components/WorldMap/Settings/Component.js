import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';

import { isMobile } from 'utils';

const useStyles = makeStyles(theme => ({
  root: {
    position: isMobile ? 'relative' : 'absolute',
    width: isMobile ? '100%' : 330,
    height: 400,
    'padding-left': 20,
    'padding-top': 20,
  },
  title: {
    'margin-bottom': 10, 
  },
}));

export default function Settings({ value, onChange }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.title}>Highlighting (distribution) Criteria</FormLabel>
        <RadioGroup aria-label="settings" name="settings" value={value} onChange={onChange}>
          <FormControlLabel value="confirmed" control={<Radio />} label="Confirmed" />
          <FormControlLabel value="recovered" control={<Radio />} label="Recovered" />
          <FormControlLabel value="deaths" control={<Radio />} label="Deaths" />
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel value="population_confirmed" control={<Radio />} label="Confirmed per per 10M inhabitants" />
          <FormControlLabel value="population_recovered" control={<Radio />} label="Recovered per per 10M inhabitants" />
          <FormControlLabel value="population_deaths" control={<Radio />} label="Deaths per per 10M inhabitants" />
          <FormControlLabel value="population_active" control={<Radio />} label="Active per per 10M inhabitants" />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
