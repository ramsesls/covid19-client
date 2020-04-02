import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import LineChart from 'components/Charts/Line';
import Loading from 'components/Loading';
import LineChartButtons from 'components/Charts/Line/Button';

import { useNivoTheme } from 'theme';
import { convertToLineChartData, formatTooltipDate } from 'utils';
import { useAPI } from 'api';

import useStyles from './styles';

const PointSymbol = ({ size, color, borderWidth, borderColor }) => (
  <g>
    <circle fill="#fff" r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />
    <circle
      r={size / 5}
      strokeWidth={borderWidth}
      stroke={borderColor}
      fill={color}
      fillOpacity={0.35}
    />
  </g>
);

function getYAxisValue(value, type) {
  switch(type) {
    case 'linear': return value;
    case 'log': return Math.ceil(Math.exp(value));
    case 'log10': return Math.ceil(10 ** value);
    default: return value;
  }
}

const colors = ['#000000', '#e41a1c'];

function getTooltipContent(point, type) {
  return `${getYAxisValue(point.data.yFormatted, type)} ${point.serieId.toLowerCase()} on ${formatTooltipDate(point.data.x)}`;
}

export default function ProgressChart() {
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
        pointSymbol={PointSymbol}
        colors={colors}
        tooltip={({ point }) => getTooltipContent(point, type)}
        axisLeft={{
          legendOffset: 12,
          format: value => getYAxisValue(value, type),
        }}
      />
      <Paper className={classes.controls}>
        <LineChartButtons onChange={handleTypeChange} type={type} />
      </Paper>
    </div>
};
