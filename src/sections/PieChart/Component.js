import React from 'react';

import PieChart from 'components/Charts/Pie';
import Loading from 'components/Loading';
import Card from 'components/Card';

import { useNivoTheme } from 'theme';
import { convertToPieChartData } from 'utils';
import { useAPI } from 'api';

export default function _PieChart({ title, criterion, color }) {
  const [data, isLoading] = useAPI('/confirmed?level=countryRegion');
  const theme = useNivoTheme();

  return isLoading
    ? <Loading />
    : <Card color={color} title={title}>
        <PieChart
          data={convertToPieChartData(data, criterion)}
          theme={theme}
          color={color}
        />
    </Card>;
};
