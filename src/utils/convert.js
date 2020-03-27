const getY = (value, type) => {
  if (!value) return 0;

  switch(type) {
    case 'linear': return value;
    case 'log': return Math.log(value);
    case 'log10': return Math.log10(value);
    default: return value;
  }
}

const convertToLineChartData = (data, type = 'linear') => data.reduce((acc, item) => {
  acc[0].data.push({ x: item.reportDate, y: getY(item.deaths.total, type) });
  acc[1].data.push({ x: item.reportDate, y: getY(item.confirmed.total, type) });

  return acc;
}, [{ id: 'Deaths', data: [] }, { id: 'Confirmed', data: [] }]);

const convertToPieChartData = (data, criterion) => {
  const sortedData = criterion === 'confirmed'
    ? data
    : data.sort((a, b) => b[criterion] - a[criterion]);

  const top10 = sortedData.filter(item => !item.provinceState).slice(0, 10);

  return top10.map(item => ({
    id: item.countryRegion,
    label: item.countryRegion,
    value: item[criterion],
  }));
}

export { convertToLineChartData, convertToPieChartData };
