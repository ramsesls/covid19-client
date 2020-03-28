import React from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PieChart from 'sections/PieChart';

import useStyles from './styles';

export default function Analytics() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* By Recovered */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <PieChart title="First 10 countries by recovered" criterion="recovered" color="green"/>
          </Paper>
        </Grid>
        {/* By Deaths */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <PieChart title="First 10 countries by deaths" criterion="deaths" color="red"/>
          </Paper>
        </Grid>
        {/* By Confirmed */}
        <Grid item xs={12} md={4} lg={6}>
          <Paper className={fixedHeightPaper}>
            <PieChart title="First 10 countries by confirmed cases" criterion="confirmed"/>
          </Paper>
        </Grid>
        {/* By Active */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <PieChart title="First 10 countries by active cases" criterion="active"/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
