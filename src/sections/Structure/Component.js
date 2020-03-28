import React, { useState } from 'react';

import AppBar from 'sections/AppBar';
import Menu from 'sections/Menu';
import Content from 'sections/Content';
import Copyright from 'sections/Copyright';

import { isMobile } from 'utils';

import useStyles from './styles';

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
