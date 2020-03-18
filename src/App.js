import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import ErrorBoundary from 'react-error-boundary';
import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';

import Structure from 'sections/Structure';
import { ThemeProvider } from 'theme';
import { StoreProvider } from 'store';

import { BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <StoreProvider>
        <ThemeProvider>
          <div className={classes.root}>
            <CssBaseline />
            <Router>
              <Structure />
            </Router>
          </div>
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
}

export default App;
