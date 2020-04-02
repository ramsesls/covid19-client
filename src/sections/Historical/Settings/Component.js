import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';

import ChartIcon from '@material-ui/icons/BarChart';
import MapIcon from '@material-ui/icons/Map';

import Countries from 'sections/Historical/Countries';
import DatePicker from 'sections/Historical/DatePicker';
import Criteria from 'sections/Historical/Criteria';

import useStyles from './styles';

export default function Settings({
  to,
  mode,
  from,
  criterion,
  selectedCountries,
  onModeChange,
  onCountriesChange,
  onFromChange,
  onToChange,
  onCriterionChange,
}) {
  const classes = useStyles();

  return (
    <Box display="flex" bgcolor="background.paper" className={clsx(classes.settings, classes.controls)}>
      <Grid container spacing={3}>
        <Grid item lg={2} md={6} xs={12}>
          <div className={classes.toggle}>
            <Typography component="span" noWrap color="inherit">
              <MapIcon color={mode === 'chart' ? 'disabled' : 'action'} fontSize="large" />
            </Typography>
            <Switch color="default" checked={mode === 'chart'} onChange={onModeChange} />
            <Typography component="span" noWrap color="inherit">
              <ChartIcon color={mode === 'chart' ? 'action' : 'disabled'} fontSize="large" />
            </Typography>
          </div>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Countries onChange={onCountriesChange} selected={selectedCountries} disabled={mode === 'map'} />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <DatePicker
            from={from}
            to={to}
            onFromChange={onFromChange}
            onToChange={onToChange}
          />
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Criteria onChange={onCriterionChange} value={criterion} />
        </Grid>
      </Grid>
    </Box>
  );
}
