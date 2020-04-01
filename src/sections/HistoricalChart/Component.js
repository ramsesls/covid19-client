import React from 'react';

import useStyles from './styles';

import { ResponsiveLine } from '@nivo/line';

const commonProperties = {
  width: 900,
  height: 400,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
};

const curveOptions = ['linear', 'monotoneX', 'step', 'stepBefore', 'stepAfter'];

const italy = [{ confirmed: 100 }, { confirmed: 120 }, { confirmed: 180 }, { confirmed: 200 }, { confirmed: 300 }];
const china = [{ confirmed: 320 }, { confirmed: 380 }, { confirmed: 480 }, { confirmed: 487 }, { confirmed: 489 }];
const usa = [{ confirmed: 2 }, { confirmed: 8 }, { confirmed: 11 }, { confirmed: 24 }, { confirmed: 120 }];

const data = { italy, china, usa };

const _data = Object.entries(data).reduce((acc, item) => {
  acc.push({ id: item[0], data: [...item[1]].map((item, i) => ({ x: `#${i}`, y: item && item.confirmed })) });

  return acc;
}, []);

const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
  const classes = useStyles();

  return series.map(({ id, data, color }) => (
      <g>
        <path
          key={id}
          d={lineGenerator(
            data.map(d => ({
              x: xScale(d.data.x),
              y: yScale(d.data.y),
            }))
          )}
          fill="none"
          stroke={color}
        />
        <g fill="white">
          <circle cx="40" cy="40" r="25" />
          <circle cx="60" cy="60" r="25" />
          {id}
        </g>
      </g>
  ))
}

export default function HistoricalCharts() {
  const classes = useStyles();

  return (
    <ResponsiveLine
      {...commonProperties}
      data={_data}
      enableGridY={false}
      enableGridX={false}
      tooltip={({ point }) => {
        return `At ${point.x} date ${point.y} confirmed cases in ${point.serieId}`;
      }}
      useMesh={true}
      yScale={{
        type: 'linear',
      }}
      curve="monotoneX"
      isInteractive={true}
      layers={['grid', 'markers', 'axes', 'areas', 'crosshair', DashedLine, 'points', 'slices', 'mesh', 'legends']}
    />
  );
}
