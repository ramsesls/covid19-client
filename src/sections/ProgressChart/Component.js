import React from 'react';

import LineChart from 'components/LineChart';
import Loading from 'components/Loading';

import { useNivoTheme } from 'theme';
import { convertToLineChartData } from 'utils';
import { useAPI } from 'api';

export default function ProgressChart() {
  const [data, isLoading] = useAPI('/daily');
  const theme = useNivoTheme();

  return isLoading
    ? <Loading />
    : <LineChart
      data={data ? convertToLineChartData(data) : []}
      theme={theme}
    />;
};
