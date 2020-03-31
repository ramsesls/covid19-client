import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { copyright } from 'config';

function Copyright() {
  return (
    <Box pt={2} pb={2}>
      <Typography variant="body2" color="textSecondary" align="center">
        {copyright.title}
        <Link color="inherit" href="https://covid19-info.app">
          {copyright.link}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default Copyright;
