import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Title from 'components/Title';
import { today, formatNumber } from 'utils';

import useStyles from './styles';

export default function Total({ data }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Confirmed</Title>
      <Typography component="p" variant="h4">
        {formatNumber(data.confirmed.value)}
      </Typography>
      <Divider className={classes.divider} />
      <Title>Recovered</Title>
      <Typography component="p" variant="h4">
        {formatNumber(data.recovered.value)}
      </Typography>
      <Divider className={classes.divider} />
      <Title>Deaths</Title>
      <Typography component="p" variant="h4">
        {formatNumber(data.deaths.value)}
      </Typography>
      <Typography className={classes.depositContext}></Typography>
      <div>
        <Typography color="textSecondary" className={classes.depositContext}>
          on {today()}
        </Typography>
      </div>
    </React.Fragment>
  );
}
