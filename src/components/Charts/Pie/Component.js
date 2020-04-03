import React from 'react';

import { ResponsivePie } from '@nivo/pie';

import { chartDefaults } from 'config';

const PieChart = ({ data, color, ...props }) => {
  const colors = { scheme: 'red_yellow_blue' };

  if (color) {
    if (color === 'red') {
      colors.scheme = 'set1';
    } else if (color === 'green') {
      colors.scheme = 'set2';
    }
  }

  return <ResponsivePie
    data={data}
    colors={colors}
    {...chartDefaults.pie}
    {...props}
  />
};

export default PieChart;
