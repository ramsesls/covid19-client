import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';

import Countries from 'sections/Historical/Countries';
import DatePicker from 'sections/Historical/DatePicker';
import Criteria from 'sections/Historical/Criteria';
import Player from 'sections/Historical/Player';

import { historical } from 'config';

import useStyles from './styles';

export default function Historical() {
  const classes = useStyles();
  const [mode, setMode] = useState('map');
  const [selectedCountries, setSelectedCountries] = useState(historical.countries.default);
  const [from, setFrom] = useState(historical.dates.from);
  const [to, setTo] = useState(historical.dates.to);
  const [criterion, setCriterion] = useState('confirmed');
  const [playerStatus, setPlayerStatus] = useState('paused');
  const [progress, setProgress] = useState(0);

  useEffect(_ => {
    let timerId;

    if (playerStatus === 'playing') {
      if (progress < 100) {
        timerId = setInterval(_ => {
          setProgress(progress => progress + 1);
        }, 400);
      } else {
        clearInterval(timerId);
        setPlayerStatus('paused');
        setProgress(0);
      }
    }

    return _ => timerId && clearInterval(timerId);
  }, [playerStatus, progress]);

  function handleDrag(ev, data) {
    const value = Math.round(data.x / data.node.offsetWidth * 100);

    if (value < 0) {
      setProgress(0);
    } else if (value > 100) {
      setProgress(100);
    } else {
      setProgress(value);
    }
  }

  function handleModeChange(ev) {
    setMode(ev.target.checked ? 'chart' : 'map');
  }

  function handleCountriesChange(ev, value) {
    setSelectedCountries(value);
  }

  function handleFromChange(date) {
    setFrom(date);
  }

  function handleToChange(date) {
    setTo(date);
  }

  function handleCriterionChange(ev) {
    setCriterion(ev.target.value);
  }

  function togglePlayer() {
    setPlayerStatus(status => status === 'paused' ? 'playing' : 'paused');
  }

  return (
    <Paper className={classes.root}>
      {/* Settings */}
      <Box display="flex" bgcolor="background.paper" className={clsx(classes.settings, classes.controls)}>
        <Grid container spacing={3}>
          <Grid item lg={2} md={6} xs={12}>
            <div className={classes.toggle}>
              <Typography component="span" noWrap color="inherit">
                Map
              </Typography>
              <Switch color="default" checked={mode === 'chart'} onChange={handleModeChange} />
              <Typography component="span" noWrap color="inherit">
                Chart
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Countries onChange={handleCountriesChange} selected={selectedCountries} />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <DatePicker
              from={from}
              to={to}
              onFromChange={handleFromChange}
              onToChange={handleToChange}
            />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Criteria onChange={handleCriterionChange} value={criterion} />
          </Grid>
        </Grid>
      </Box>
      {/* Content */}
      <Box display="flex" className={classes.content}>
        <div>
          Historical
        </div>
      </Box>
      {/* Player */}
      <Box display="flex" bgcolor="background.paper" className={clsx(classes.player, classes.controls)}>
        <Player status={playerStatus} onChange={togglePlayer} onDrag={handleDrag} value={progress} />
      </Box>
    </Paper>
  );
}
