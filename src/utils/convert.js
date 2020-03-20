const convertToLineChartData = data => data.reduce((acc, item) => {
  acc[0].data.push({ x: item.reportDateString, y: item.totalConfirmed });
  acc[1].data.push({ x: item.reportDateString, y: item.totalRecovered });
  return acc;
}, [{id: 'Confirmed', data: []}, {id: 'Recovered', data: []}]);

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
