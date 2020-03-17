import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from 'components/Title';

import { today } from 'utils';

import { useAPI } from 'api';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Total() {
  const classes = useStyles();
  const [data, isLoading] = useAPI('/');

  return (
    <React.Fragment>
      <Title>Total Confirmed</Title>
      <Typography component="p" variant="h4">
        {
          isLoading
            ? 'loading...'
            : new Intl.NumberFormat().format(data.confirmed.value)
        }
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {today()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          More Info
        </Link>
      </div>
    </React.Fragment>
  );
}
