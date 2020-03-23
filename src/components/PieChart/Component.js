import React from 'react';

import { ResponsivePie } from '@nivo/pie';

import ChartWrapper from 'components/ChartWrapper';

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
    margin={{ top: 25, bottom: 25, left: 80, right: 80 }}
    innerRadius={0.5}
    padAngle={0}
    sortByValue={true}
    cornerRadius={0}
    colors={colors}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    slicesLabelsSkipAngle={10}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    {...props}
  />
};

const WrappedChart = props => <ChartWrapper><PieChart {...props} /></ChartWrapper>;

export default WrappedChart;
