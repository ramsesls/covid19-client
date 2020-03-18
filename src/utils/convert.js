const convertToLineChartData = data => data.reduce((acc, item) => {
  acc[0].data.push({ x: item.reportDateString, y: item.totalConfirmed });
  acc[1].data.push({ x: item.reportDateString, y: item.totalRecovered });
  return acc;
}, [{id: 'Confirmed', data: []}, {id: 'Recovered', data: []}]);

export { convertToLineChartData };
