import dayjs from 'dayjs';

import { historical } from 'config';

const getY = (value, type) => {
  if (!value) return 0;

  switch(type) {
    case 'linear': return value;
    case 'log': return Math.log(value);
    case 'log10': return Math.log10(value);
    default: return value;
  }
};

function correctUSData(us) {
  if (us.active === 0) {
    return { ...us, active: us.confirmed - us.deaths - us.recovered }
  }

  return us;
}

const dataCorrection = data => {
  return data.map(country => country.countryRegion === 'US' ? correctUSData(country) : country);
};

const convertToLineChartData = (data, type = 'linear') => data.reduce((acc, item) => {
  acc[0].data.push({ x: item.reportDate, y: getY(item.deaths.total, type) });
  acc[1].data.push({ x: item.reportDate, y: getY(item.confirmed.total, type) });

  return acc;
}, [{ id: 'Deaths', data: [] }, { id: 'Confirmed', data: [] }]);

const getLineChartData = (data, criterion, type, date) => {
  return {
    x: (date ? dayjs(date, historical.dates.format) : dayjs(data.lastUpdate))
      .format(historical.dates.lineChartFormat),
    y: getY(data[criterion], type),
  };
};

const convertHistoricalToLineChartData = (data, type = 'linear', criterion, selected, currentDate) => {
  const dates = Object.keys(data);
  const selectedDates = dates.slice(0, dates.indexOf(currentDate));

  return Object.entries(data).reduce((acc, [date, item]) => {
    item && item.forEach(daily => {
      if (selected.includes(daily.countryRegion) && selectedDates.includes(date)) {
        const country = acc.find(bl => bl.id === daily.countryRegion);

        if (country) {
          country.data.push(getLineChartData(daily, criterion, type, date));
        } else {
          acc.push({ id: daily.countryRegion, data: [getLineChartData(daily, criterion, type, date)] })
        }
      }
    });

    return acc;
  }, []);
};

const convertToPieChartData = (data, criterion) => {
  const _data = dataCorrection(data, 'pie chart');

  const sortedData = criterion === 'confirmed'
    ? _data
    : [..._data].sort((a, b) => b[criterion] - a[criterion]);

  const top10 = sortedData.filter(item => !item.provinceState).slice(0, 10);

  return top10.map(item => ({
    id: item.countryRegion,
    label: item.countryRegion,
    value: item[criterion],
  }));
};

const generateDataRange = (from, to, format, isArray) => {
  let dates = {};
  const max = to;
  let current = from;

  while(current.isBefore(max) && (Object.keys(dates).length < 2000)) {
    dates[current.format(format)] = undefined;
    current = current.add(1, 'days');
  }

  return isArray ? Object.keys(dates) : dates;
};

export {
  convertToLineChartData,
  convertToPieChartData,
  dataCorrection,
  convertHistoricalToLineChartData,
  generateDataRange,
};
