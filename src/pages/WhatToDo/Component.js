import React from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from 'components/Card';

import { videos } from 'config';

import useStyles from './styles';

export default function Contacts() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {
          videos.map(({ src, title }) => {
            return (
              <Grid item xs={12} md={8} lg={6} key={src}>
                <Paper className={fixedHeightPaper} square>
                  <Card title={title} elevation={3}>
                    <div className="full-size">
                      <iframe
                        title={title}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        src={src}
                      >
                      </iframe>
                    </div>
                  </Card>
                </Paper>
              </Grid>
            );
          })
        }
      </Grid>
    </Container>
  );
}
