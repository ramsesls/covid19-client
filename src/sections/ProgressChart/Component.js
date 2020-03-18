import React from 'react';

import LineChart from 'components/LineChart';
import Loading from 'components/Loading';
import { extendDefaultTheme, defaultTheme } from '@nivo/core';

import { convertToLineChartData } from 'utils';
import { useStore } from 'store';
import { useAPI } from 'api';

const additionalStylesForLineChartDarkMode = {
  textColor: '#FFFFFF',
  grid: {
    line: {
      stroke: '#181414',
    },
  },
  crosshair: {
    line: {
      stroke: '#f50057',
    },
  },
  tooltip: {
    container: {
      background: '#181414',
    },
  },
};

export default function ProgressChart() {
  const [data, isLoading] = useAPI('/daily');
  const { state: { themeMode } } = useStore();

  const theme = themeMode === 'dark'
    ? extendDefaultTheme(
        defaultTheme,
        additionalStylesForLineChartDarkMode,
      )
    : defaultTheme;

  return isLoading
    ? <Loading />
    : <LineChart
      data={data ? convertToLineChartData(data) : []}
      theme={theme}
    />;
};
