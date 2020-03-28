import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import useStyles from './styles';

const Loading = ({ size, withoutBackground }) => {
  const classes = useStyles();

  return <Paper elevation={0} square={true} className={clsx(classes.preloader, withoutBackground && classes.open)}>
    <CircularProgress size={size} />
  </Paper>;
};

Loading.defaultProps = {
  size: 50,
};

export default Loading;
