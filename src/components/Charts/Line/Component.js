import React from 'react';

import { ResponsiveLine } from '@nivo/line'

import withErrorHandling from 'errorHandling';
import { WrongData as WrongDataFallback } from 'errorHandling/Fallbacks';

import { isMobile } from 'utils';
import { chartDefaults } from 'config';

function getTickValues([confirmed, deaths]) {
  const data = confirmed.data.length > deaths.data.length ? confirmed.data : deaths.data;
  return data.filter((_, i) => !(i % (isMobile ? 8 : 4))).map(item => new Date(item.x));
}

const LineChart = ({ data, type, ...props }) => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        precision: 'day',
      }}
      xFormat="time:%Y-%m-%d"
      axisBottom={{
        format: '%b %d',
        tickValues: getTickValues(data),
        tickRotation: -45,
        tickPadding: 10,
      }}
      {...chartDefaults.line}
      {...props}
    />
  );
};

export default withErrorHandling(LineChart, WrongDataFallback);

