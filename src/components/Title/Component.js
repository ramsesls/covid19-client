import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>
      {props.children}
    </Typography>
  );
}
