import React from 'react';

import ReportTable from 'components/ReportTable';
import Loading from 'components/Loading';

import { useAPI } from 'api';
import { dataCorrection } from 'utils';

export default function Summary() {
  const [data, isLoading] = useAPI('/confirmed?level=countryRegion');

  return isLoading
    ? <Loading />
    : <ReportTable data={dataCorrection(data)} />;
};
