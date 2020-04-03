import React from 'react';

import { ResponsiveLine } from '@nivo/line'

import { isMobile } from 'utils';
import { chartDefaults } from 'config';

function getTickValues(data) {
  const _data = data[0].data;
  return _data.filter((_, i) => !(i % (isMobile ? 8 : 4))).map(item => new Date(item.x));
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
        tickValues: data.length && getTickValues(data),
        tickRotation: -45,
        tickPadding: 10,
      }}
      {...chartDefaults.line}
      {...props}
    />
  );
};

export default LineChart;
