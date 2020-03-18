import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import useStyles from './styles';

function Link(props) {
  const classes = useStyles();

  return (
    <RouterLink {...props} className={classes.root}/>
  );
}

export default Link;
