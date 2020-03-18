import React, { Suspense } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const AsyncComponentLoader = Component => props => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  );
};

export default AsyncComponentLoader;
