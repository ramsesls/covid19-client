const ranges = [
  { min: 0, max: 100, colorStart: '#FFCCCC', colorEnd: '#FF9999' },
  { min: 100, max: 400, colorStart: '#FF9999', colorEnd: '#FF6666' },
  { min: 400, max: 1000, colorStart: '#FF6666', colorEnd: '#FF3333' },
  { min: 1000, max: 5000, colorStart: '#FF3333', colorEnd: '#FF0000' },
  { min: 5000, max: 15000, colorStart: '#FF0000', colorEnd: '#CC0000' },
  { min: 15000, max: 50000, colorStart: '#CC0000', colorEnd: '#990000' },
  { min: 50000, max: 120000, colorStart: '#990000', colorEnd: '#660000' },
  { min: 120000, max: Infinity, colorStart: '#660000', colorEnd: '#330000' },
];

const mapSettings = {
  main: [
    {
      value: 'confirmed',
      name: 'Confirmed',
    },
    {
      value: 'recovered',
      name: 'Recovered',
    },
    {
      value: 'deaths',
      name: 'Deaths',
    },
    {
      value: 'active',
      name: 'Active',
    },
  ],
  optional: [
    {
      value: 'population_confirmed',
      name: 'Confirmed per 10M inhabitants',
    },
    {
      value: 'population_recovered',
      name: 'Recovered per 10M inhabitants',
    },
    {
      value: 'population_deaths',
      name: 'Deaths per 10M inhabitants',
    },
    {
      value: 'population_active',
      name: 'Active per 10M inhabitants',
    },
  ],
};

const menuItems = {
  main: [
    {
      path: '/dashboard',
      isDefault: true,
      icon: 'Dashboard',
      title: 'Dashboard',
    },
    {
      path: '/map',
      icon: 'Map',
      title: 'World Map',
    },
    {
      path: '/usa',
      icon: 'Map',
      title: 'USA',
    },
    {
      path: '/analytics',
      icon: 'BarChart',
      title: 'Analytics',
    },
    {
      path: '/what-to-do',
      icon: 'Layers',
      title: 'What To Do?',
    },
  ],

  optional: {

  }
}

export { ranges, mapSettings, menuItems };
