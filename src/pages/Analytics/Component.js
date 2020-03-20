import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

export default function Analytics() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Coming soon...
    </div>
  );
}
