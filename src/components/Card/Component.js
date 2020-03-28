import React from 'react';

import Paper from '@material-ui/core/Paper';

import Title from 'components/Title';

import useStyles from './styles';

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
