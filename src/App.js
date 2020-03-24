import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import withErrorHandler from 'errorHandling';
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks';

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
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
