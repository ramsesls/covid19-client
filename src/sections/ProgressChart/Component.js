import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import LineChart from 'components/Charts/Line';
import Loading from 'components/Loading';
import LineChartButtons from 'components/Charts/Line/Button';

import { useNivoTheme } from 'theme';
import { convertToLineChartData } from 'utils';
import { useAPI } from 'api';

import useStyles from './styles';

export default function PieChart() {
  const [data, isLoading] = useAPI('/daily');
  const [type, setType] = useState('log');
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
