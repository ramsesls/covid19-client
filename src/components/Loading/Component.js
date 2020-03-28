import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';

const Loading = ({ size }) => {
  const classes = useStyles();

  return <Paper elevation={0} square={true} className={classes.preloader}>
    <CircularProgress size={size} />
  </Paper>;
};

Loading.defaultProps = {
  size: 50,
};

export default Loading;
