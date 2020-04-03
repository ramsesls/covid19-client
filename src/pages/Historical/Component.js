import React, { useState, useEffect, useCallback, useMemo } from 'react';

import Paper from '@material-ui/core/Paper';

import Player from 'sections/Historical/Player';
import Settings from 'sections/Historical/Settings';
import Content from 'sections/Historical/Content';

import dayjs from 'dayjs';

import { historical } from 'config';

import useStyles from './styles';

export default function Historical() {
  const classes = useStyles();
  const [mode, setMode] = useState('map');
  const [selectedCountries, setSelectedCountries] = useState(historical.countries.default);
  const [from, setFrom] = useState(historical.dates.defaults.from);
  const [to, setTo] = useState(historical.dates.defaults.to);
  const [criterion, setCriterion] = useState('confirmed');
  const [playerStatus, setPlayerStatus] = useState('paused');
  const [progress, setProgress] = useState(100);

  useEffect(_ => {
    let timerId;

    if (playerStatus === 'playing') {
      if (progress < 100) {
        timerId = setInterval(_ => {
          setProgress(progress => progress + 1);
        }, 200);
      } else {
        clearInterval(timerId);
        setPlayerStatus('paused');
      }
    }

    return _ => timerId && clearInterval(timerId);
  }, [playerStatus, progress]);

  const handleModeChange = useCallback(ev => {
    setMode(ev.target.checked ? 'chart' : 'map');
  }, [setMode]);

  const handleCountriesChange = useCallback((ev, value) => {
    setSelectedCountries(value);
  }, [setSelectedCountries]);

  const handleFromChange = useCallback(date => {
    setFrom(date);
  }, [setFrom]);

  const handleToChange = useCallback(date => {
    setTo(date);
  }, [setTo]);

  const handleCriterionChange = useCallback(ev => {
    setCriterion(ev.target.value);
  }, [setCriterion]);

  const togglePlayer = useCallback(_ => {
    setPlayerStatus(status => status === 'paused' ? 'playing' : 'paused');
  }, [setPlayerStatus]);

  const handleDrag = useCallback((ev, data) => {
    setPlayerStatus('paused');
    const value = Math.round((data.x / (data.node.offsetWidth - 20) * 100));

    if (value < 0) {
      setProgress(0);
    } else if (value > 100) {
      setProgress(100);
    } else {
      setProgress(value);
    }
  }, [setProgress, setPlayerStatus]);

  const handleReset = useCallback(_ => {
    setProgress(0);
    setPlayerStatus('paused');
  }, [setProgress, setPlayerStatus]);

  const currentDate = useMemo(_ => {
    const _from = dayjs(from);
    const _to = dayjs(to);

    const diff = _to.diff(_from, 'days');

    const current = diff * progress / 100;

    return _from
      .add(Math.round(current), 'days')
      .format(historical.dates.format);
  }, [from, to, progress]);

  return (
    <Paper className={classes.root}>
      <Settings
        mode={mode}
        from={from}
        to={to}
        criterion={criterion}
        selectedCountries={selectedCountries}
        onCountriesChange={handleCountriesChange}
        onFromChange={handleFromChange}
        onToChange={handleToChange}
        onModeChange={handleModeChange}
        onCriterionChange={handleCriterionChange}
      />
      <Content
        mode={mode}
        from={from}
        to={to}
        criterion={criterion}
        selectedCountries={selectedCountries}
        currentDate={currentDate}
      />
      <Player
        status={playerStatus}
        value={progress}
        onChange={togglePlayer}
        onDrag={handleDrag}
        onReset={handleReset}
        date={currentDate}
      />
    </Paper>
  );
}
