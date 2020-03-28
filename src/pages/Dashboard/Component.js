import React from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ProgressChart from 'sections/ProgressChart';
import Summary from 'sections/Summary';
import ReportByCountries from 'sections/ReportByCountries';

import useStyles from './styles';

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Summary */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Summary />
          </Paper>
        </Grid>
        {/* ProgressChart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
             <ProgressChart />
          </Paper>
        </Grid>
        {/* Recent ReportByCountries */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ReportByCountries />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
