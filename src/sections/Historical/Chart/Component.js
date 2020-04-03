import React, { useState, useMemo } from 'react';

import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import LineChart from 'components/Charts/Line';
import LineChartButtons from 'components/Charts/Line/Button';

import { useNivoTheme } from 'theme';
import { convertHistoricalToLineChartData, formatTooltipDate } from 'utils';

import useStyles from './styles';

function getYAxisValue(value, type) {
  switch(type) {
    case 'linear': return value;
    case 'log': return Math.ceil(Math.exp(value));
    case 'log10': return Math.ceil(10 ** value);
    default: return value;
  }
}

function getTooltipContent(point, type, criterion) {
  return `${getYAxisValue(point.data.yFormatted, type)} ${criterion} cases in ${point.serieId} on ${formatTooltipDate(point.data.x)}`;
}

const colors = { scheme: 'red_blue' };

export default function Chart({ data, selected, criterion, currentDate }) {
  const [type, setType] = useState('linear');
  const classes = useStyles();
  const theme = useNivoTheme();

  function handleTypeChange(type) {
    setType(type);
  }

  const _data = useMemo(_ => {
    return convertHistoricalToLineChartData(data, type, criterion, selected, currentDate);
  }, [data, type, criterion, selected, currentDate]);

  return (
    <div className={clsx(classes.root, 'full-size')}>
      <LineChart
        data={_data}
        theme={theme}
        type={type}
        colors={colors}
        tooltip={({ point }) => getTooltipContent(point, type, criterion)}
        axisLeft={{
          legendOffset: 12,
          format: value => getYAxisValue(value, type),
        }}
        legends={[]}
        enableArea={false}
        motionStiffness={145}
        motionDamping={20}
        pointSize={5}
        pointBorderWidth={1}
        curve="monotoneX"
      />
      <Paper className={classes.controls}>
        <LineChartButtons onChange={handleTypeChange} type={type} />
      </Paper>
    </div>
  );

};
