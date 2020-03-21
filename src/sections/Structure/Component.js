import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from 'sections/AppBar';
import Menu from 'sections/Menu';
import Content from 'sections/Content';
import Copyright from 'sections/Copyright';

import { isMobile } from 'utils';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    position: 'relative',
  },
  mainSection: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    height: `calc(100% - ${theme.mixins.toolbar.minHeight + 9}px)`,

  },
}));

export default function Structure() {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(!isMobile);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <AppBar isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className={classes.mainSection}>
          <Content />
          <Copyright />
        </div>
      </main>
    </>
  );
}
