import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import LineChart from 'components/LineChart';
import Loading from 'components/Loading';
import LineChartButtons from 'components/Button/LineChart';

import { useNivoTheme } from 'theme';
import { convertToLineChartData } from 'utils';
import { useAPI } from 'api';

const useStyles = makeStyles(theme => ({
  controls: {
    position: 'absolute',
    'z-index': 1,
    top: -theme.spacing(2),
    left: -theme.spacing(2),
    width: 225,
    height: 50,
    'padding-left': 5,
    display: 'flex',
    'align-items': 'center',
    'border-top-right-radius': 0,
    'border-bottom-left-radius': 0,

  },
  root: {
    position: 'relative',
  },
  icon: {
    'margin-left': 10,
  },
}));

export default function PieChart() {
  const [data, isLoading] = useAPI('/daily');
  const [type, setType] = useState('linear');
  const classes = useStyles();
  const theme = useNivoTheme();

  function handleTypeChange(type) {
    setType(type);
  }

  return isLoading
    ? <Loading />
    : <div className={clsx(classes.root, 'full-size')}>
      <LineChart
        data={convertToLineChartData(data, type)}
        theme={theme}
        type={type}
      />
      <Paper className={classes.controls}>
        <LineChartButtons onChange={handleTypeChange} type={type} />
      </Paper>
    </div>
};
