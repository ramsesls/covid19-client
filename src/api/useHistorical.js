import { useMemo } from 'react';

import dayjs from 'dayjs';
import { useAPI } from './';

import { historical } from 'config';
import { generateDataRange } from 'utils';

const format = historical.dates.format;
let historicalData = generateDataRange(historical.dates.min, dayjs(), format, false);

function getAPIParams(from, to) {
  const dates = generateDataRange(dayjs(from, format), dayjs(to, format), format, true);

  const [_from, _to, shouldUpdate] = shouldWeMakeACall(dates, historicalData, from, to);

  return [getUrlForHistorical(_from, _to), !shouldUpdate];
}

function getUrlForHistorical(from, to) {
  return `/historical?from=${from}&to=${to}`;
}

function shouldWeMakeACall(dates, data, from, to) {
   /* eslint-disable */ 
  const _from = dates.reduce((acc, date) => ((!data[date] && !acc && (acc = date)), acc), null);
  const _to = dates.reverse().reduce((acc, date) => ((!data[date] && !acc && (acc = date)), acc), null);

  return _from && _to
    ? [_from, _to, true]
    : [from, to, false];
}

export default function useHistorical(from, to) {
  const [data, isLoading] = useAPI(...getAPIParams(from, to));

  if (data) {
    historicalData = { ...historicalData, ...data };
  }

  const _data = useMemo(_ => {
    const dates = generateDataRange(dayjs(from, format), dayjs(to, format), format, true);

    return dates.reduce((acc, date) => {
      acc[date] = historicalData[date];

      return acc;
    }, {});
  }, [from, to, data]);

  return [_data, isLoading];
}
