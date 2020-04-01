import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { mapSettings } from 'config';

import useStyles from './styles';

export default function Criteria({ value, onChange }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} variant="outlined">
      <InputLabel id="historical-select">Criterion</InputLabel>
      <Select
        labelId="historical-select"
        value={value}
        onChange={onChange}
        label="Criterion"
      >
        {
          mapSettings.main.map((setting, i) => <MenuItem
            value={setting.value}
            key={i}
          >
            {setting.name}
          </MenuItem>)
        }
      </Select>
    </FormControl>
  );
}
