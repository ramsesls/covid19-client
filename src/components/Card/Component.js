import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Title from 'components/Title';

const useStyles = makeStyles(({
  title: {
    height: 40,
    'padding': 5,
    'border-left': '10px solid',
    'border-color': options => options.color || '#2196f3',
  },
  root: {
    display: 'flex',
    'flex-direction': 'column',
    overflow: 'hidden',
    height: '100%',
  },
  content: {
    width: '100%',
    height: 'calc(100% - 30px)',
    overflow: 'hidden',
  }
}));

const Card = ({ color, title, children, ...props }) => {
  const classes = useStyles({ color });

  return (
    <div className={classes.root}>
      <Paper className={classes.title} square>
        <Title>{title}</Title>
      </Paper>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Card;
