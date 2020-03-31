import React from 'react';

import { crashMessages } from 'config';

function WrongData() {
  return <div className="chart-wrapper">{crashMessages.chart.title}</div>;
}

export default WrongData;
