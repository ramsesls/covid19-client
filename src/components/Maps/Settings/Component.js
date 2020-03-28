import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

import { isMobile } from 'utils';
import { mapSettings } from 'config';

import useStyles from './styles';

export default function Settings({ value, onChange, onUSADivisionChange, dividedInto }) {
  const classes = useStyles({ dividedInto, isMobile });

  return (
    <Paper className={classes.root}>
      <FormControl className={classes.formControl} component="fieldset">
        <InputLabel id="map-settings">Highlighting (distribution) Criterion</InputLabel>
        <Select
          labelId="map-settings"
          id="map-settings"
          value={value}
          onChange={onChange}
        >
          {
            [...mapSettings.main, ...(dividedInto ? [] : mapSettings.optional)].map((setting, i) => <MenuItem
              value={setting.value}
              key={i}
              disabled={setting.value === 'recovered' && dividedInto}
            >
              {setting.name}
            </MenuItem>)
          }
        </Select>
      </FormControl>
      {
        dividedInto && (
          <FormControl className={classes.formControl} component="fieldset">
            <InputLabel id="usa-map-settings">Divided into</InputLabel>
            <Select
              labelId="usa-map-settings"
              id="usa-map-settings"
              value={dividedInto}
              onChange={onUSADivisionChange}
            >
              <MenuItem value="states">States</MenuItem>
              <MenuItem value="counties">Counties</MenuItem>
            </Select>
          </FormControl>
        )
      }
    </Paper>
  );
}
