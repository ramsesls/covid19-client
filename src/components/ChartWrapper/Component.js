import React from 'react';

import ErrorBoundary from 'react-error-boundary';

function ErrorBoundaryFallback() {
  return <div className="chart-wrapper">Some problem with data, please try a little bit later</div>;
}

function ChartWrapper({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      {children}
    </ErrorBoundary>
  );
}

export default ChartWrapper;
