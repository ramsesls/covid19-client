import React from 'react';

import PlusIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';

import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

import useStyles from './styles';

const Controls = ({ onZoomIn, onZoomOut }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.controls}>
      <Fab color="primary" aria-label="plus" size="small" className={classes.icon} onClick={onZoomIn}>
        <PlusIcon />
      </Fab>
      <Fab color="primary" aria-label="minus" size="small" className={classes.icon} onClick={onZoomOut}>
        <MinusIcon />
      </Fab>
    </Paper>
  );
};

export default Controls;
