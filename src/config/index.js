import dayjs from 'dayjs';

const colorRanges = [
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
      path: '/historical',
      icon: 'History',
      title: 'Historical',
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

  optional: {},
};

const videos = [
  {
    src: 'https://www.youtube.com/embed/BtN-goy9VOY',
    title: 'Understanding COVID19',
  },
  {
    src: 'https://www.youtube.com/embed/h8OX0FNWANM',
    title: 'Wash Your Hands!',
  },
  {
    src: 'https://www.youtube.com/embed/-LKVUarhtvE',
    title: 'How To Wash Our Hands?',
  },
  {
    src: 'https://www.youtube.com/embed/nMY0-4p9P-M',
    title: 'Message From The "Future"',
  },
  {
    src: 'https://www.youtube.com/embed/Kas0tIxDvrg',
    title: 'A Litle Bit Numbers...'
  },
];

const chartDefaults = {
  line: {
    yScale: { type: 'linear', min: 0 },
    curve: 'natural',
    enablePointLabel: false,
    pointSize: 10,
    pointBorderWidth: 1,
    pointBorderColor: { from: 'color', modifiers: [['darker', 0.3]]},
    useMesh: true,
    enableGridX: false,
    enableGridY: false,
    enableArea: true,
    enableSlices: false,
    margin: { top: 50, right: 10, bottom: 50, left: 60 },
    axisTop: null,
    axisRight: null,
    pointLabel: 'none',
    legends: [
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
              itemOpacity: 1,
            },
          },
        ],
      },
    ], 
  },

  pie: {
    margin: { top: 25, bottom: 25, left: 80, right: 80 },
    innerRadius: 0.5,
    padAngle: 0,
    sortByValue: true,
    cornerRadius: 0,
    borderWidth: 1,
    borderColor: { from: 'color', modifiers: [['darker', 1]] },
    radialLabelsSkipAngle: 10,
    radialLabelsTextXOffset: 6,
    radialLabelsLinkOffset: 0,
    radialLabelsLinkDiagonalLength: 16,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkStrokeWidth: 1,
    slicesLabelsSkipAngle: 10,
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
  },

  darkMode: {
    textColor: '#FFFFFF',
    grid: {
      line: {
        stroke: '#181414',
      },
    },
    crosshair: {
      line: {
        stroke: '#f50057',
      },
    },
    tooltip: {
      container: {
        background: '#181414',
      },
    },
    axis: {
      ticks: {
        line: {
          stroke: '#fff',  
        },
      },
    },
  },
};

const logarithmTypes = {
  log: 'Logarithm with base e',
  log10: 'Logarithm with base 10',
};

const geoUrls = {
  usa: {
    counties: 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json',
    states: 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json',
  },
  world: 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json',
};

const standardDistributionCriteria = ['confirmed', 'recovered', 'deaths', 'active'];

const crashMessages = {
  app: {
    title: 'Oooops... Sorry, I guess, something went wrong. You can:',
    options: {
      email: 'contact with author by this email - contact@surenatoyan.com',
      reset: 'Press here to reset the application',
    },
  },
  chart: {
    title: 'Some problem with data, please try a little bit later',
  },
};

// NOTE: It should be removed
const usaEndPoints = {
  states: '/countries/US/confirmed?level=provinceState',
  counties: '/countries/US/confirmed',
};

const appTitle = 'COVID19 Information Portal';

const copyright = {
  title: 'Copyright © ',
  link: 'COVID19-info.app',
};

const authorInfo = {
  email: 'contact@surenatoyan.com',
  message: 'To Contact The Author',
};

const dateFormat = 'DD MMMM, YYYY';

const cancelationMessage = 'operation is manually canceled';

const historical = {
  dates: {
    defaults: {
      from: dayjs().subtract(25, 'days'),
      to: dayjs().subtract(3, 'days'),
    },
    min: dayjs('01-22-2020'),
    format: 'MM-DD-YYYY',
    lineChartFormat: 'YYYY-MM-DD',
  },
  countries: {
    default: ['Italy', 'China', 'US', 'Canada', 'Germany', 'Armenia'],
  }
};

export {
  colorRanges,
  mapSettings,
  menuItems,
  videos,
  chartDefaults,
  geoUrls,
  logarithmTypes,
  standardDistributionCriteria,
  crashMessages,
  usaEndPoints,
  appTitle,
  copyright,
  authorInfo,
  dateFormat,
  cancelationMessage,
  historical,
};
