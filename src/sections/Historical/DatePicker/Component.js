import React from 'react';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';

import DayjsUtils from '@date-io/dayjs';
import dayjs from 'dayjs';

import { historical } from 'config';

import useStyles from './styles';

export default function _DatePicker({ from, to, onFromChange, onToChange }) {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <div className={classes.root}>
        <DatePicker
          variant="inline"
          inputVariant="outlined"
          label="From"
          value={from}
          onChange={onFromChange}
          className={classes.picker}
          autoOk
          maxDate={to}
          minDate={historical.dates.min}
        />
        <DatePicker
          variant="inline"
          inputVariant="outlined"
          label="To"
          value={to}
          onChange={onToChange}
          className={classes.picker}
          autoOk
          minDate={from}
          maxDate={dayjs()}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}
