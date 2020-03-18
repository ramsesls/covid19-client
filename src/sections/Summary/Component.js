import React from 'react';

import Total from 'components/Total';
import Loading from 'components/Loading';

import { useAPI } from 'api';

export default function Summary() {
  const [data, isLoading] = useAPI('/');

  return isLoading
    ? <Loading />
    : <Total data={data} />;
};
