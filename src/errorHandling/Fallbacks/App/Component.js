import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ResetIcon from '@material-ui/icons/Refresh';

import { resetApp } from 'utils';

import useStyles from './styles';

const ErrorBoundaryFallback = _ => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Oooops... Sorry, I guess, something went wrong. You can:
        </Typography>
        <div className={classes.buttons}>
          <div>
            <Button target="_blank" rel="noreferrer" href="mailto: contact@surenatoyan.com">
              contact with author by this email - contact@surenatoyan.com
            </Button>
          </div>
          <Typography component="h6">or</Typography>
          <div>
            <Button onClick={resetApp}>Press here to reset the application <ResetIcon /></Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ErrorBoundaryFallback;
