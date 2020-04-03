import React, { useMemo } from 'react';

import ReportTable from 'components/ReportTable';
import Loading from 'components/Loading';

import { useAPI } from 'api';
import { dataCorrection } from 'utils';

export default function Summary() {
  const [data, isLoading] = useAPI('/confirmed?level=countryRegion');

  const correctedData = useMemo(_ => {
    return !isLoading && dataCorrection(data);
  }, [data, isLoading]);

  return isLoading
    ? <Loading />
    : <ReportTable data={correctedData} />;
};
