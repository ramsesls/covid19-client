import React from 'react';

import ReportTable from 'components/ReportTable';
import Loading from 'components/Loading';

import { useAPI } from 'api';

export default function Summary() {
  const [data, isLoading] = useAPI('/confirmed');

  return isLoading
    ? <Loading />
    : <ReportTable data={data} />;
};
