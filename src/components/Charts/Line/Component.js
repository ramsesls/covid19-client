import React from 'react';

import { ResponsiveLine } from '@nivo/line'
import { isMobile, formatTooltipDate } from 'utils';

import withErrorHandling from 'errorHandling';
import { WrongData as WrongDataFallback } from 'errorHandling/Fallbacks';

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

function getYAxisValue(value, type) {
  switch(type) {
    case 'linear': return value;
    case 'log': return Math.ceil(Math.exp(value));
    case 'log10': return Math.ceil(10 ** value);
    default: return value;
  }
}

const colors = ['#000000', '#e41a1c'];

function getTickValues([confirmed, deaths]) {
  const data = confirmed.data.length > deaths.data.length ? confirmed.data : deaths.data;
  return data.filter((_, i) => !(i % (isMobile ? 8 : 4))).map(item => new Date(item.x));
}

function getTooltipContent(point, type) {
  return `${getYAxisValue(point.data.yFormatted, type)} ${point.serieId.toLowerCase()} on ${formatTooltipDate(point.data.x)}`;
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
      yScale={{
        type: 'linear',
        min: 0,
      }}
      axisLeft={{
        legendOffset: 12,
        format: value => getYAxisValue(value, type),
      }}
      axisBottom={{
        format: '%b %d',
        tickValues: getTickValues(data),
        tickRotation: -45,
        tickPadding: 10,
      }}
      curve={'natural'}
      enablePointLabel={false}
      pointSymbol={CustomSymbol}
      pointSize={10}
      pointBorderWidth={1}
      tooltip={({ point }) => getTooltipContent(point, type)}
      pointBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]],
      }}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
      enableArea={true}
      enableSlices={false}
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

export default withErrorHandling(LineChart, WrongDataFallback);

