import React from 'react';

import { ResponsiveLine } from '@nivo/line'
import { isMobile, formatTooltipDate } from 'utils';

const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
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

function getTooltipContent(point) {
  return `${point.data.yFormatted} ${point.serieId.toLowerCase()} on ${formatTooltipDate(point.data.x)}`;
}

const LineChart = ({ data, ...props }) => {
  const colors = ['#e41a1c', '#1a9e77'];

  return (
    <ResponsiveLine
      data={data}
      xScale={{
        type: 'time',
        format: '%Y/%m/%d',
        precision: 'day',
      }}
      xFormat="time:%Y/%m/%d"
      yScale={{
        type: 'linear',
        min: 0,
      }}
      axisLeft={{
        legendOffset: 12,
      }}
      axisBottom={{
        format: '%b %d',
        tickValues: `every ${isMobile ? 12 : 7} days`
      }}
      curve={'natural'}
      enablePointLabel={false}
      pointSymbol={CustomSymbol}
      pointSize={10}
      pointBorderWidth={1}
      tooltip={({ point }) => getTooltipContent(point)}
      pointBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]],
      }}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
      enableArea={true}
      enableSlices={false}
      areaBlendMode="difference"
      margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      colors={colors}
      pointLabel="none"
      legends={[
        {
          anchor: 'top-right',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: -50,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      {...props}
    />
  );
};

export default LineChart;
