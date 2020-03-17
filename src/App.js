import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Dashboard from 'sections/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Dashboard />
    </div>
  );
}

export default App;
