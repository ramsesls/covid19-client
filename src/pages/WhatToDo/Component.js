import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from 'components/Card';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 500,
  },
}));

const videos = [
  {
    src: 'https://www.youtube.com/embed/BtN-goy9VOY',
    title: 'Understanding COVID19',
  },
  {
    src: 'https://www.youtube.com/embed/h8OX0FNWANM',
    title: 'Wash Your Hands!',
  },
  {
    src: 'https://www.youtube.com/embed/-LKVUarhtvE',
    title: 'How To Wash Our Hands?',
  },
  {
    src: 'https://www.youtube.com/embed/nMY0-4p9P-M',
    title: 'Message From The "Future"',
  },
  {
    src: 'https://www.youtube.com/embed/Kas0tIxDvrg',
    title: 'A Litle Bit Numbers...'
  },
];

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
