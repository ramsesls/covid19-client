import React from 'react';

import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';

import { useStore } from 'store';
import { isMobile } from 'utils';
import { appTitle } from 'config';

import useStyles from './styles';

const themeToggleProps = { 'aria-label': 'toggle theme' };

const AppBar_ = ({ isMenuOpen, onMenuOpen }) => {
  const classes = useStyles();
  const { state: { themeMode }, actions: { setThemeMode } } = useStore();

  function handleChangeTheme(ev) {
    setThemeMode(ev.target.checked ? 'dark' : 'light');
  }

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, isMenuOpen && !isMobile && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuOpen}
          className={clsx(classes.menuButton, isMenuOpen && !isMobile && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {appTitle}
        </Typography>
        <div className={classes.theme}>
          <Typography component="span" noWrap color="inherit">
            light
          </Typography>
          <Switch
            aria-label="toggle theme"
            inputProps={themeToggleProps}
            color="default"
            checked={themeMode === 'dark'}
            onChange={handleChangeTheme}
          />
          <Typography component="span" noWrap color="inherit">
            dark
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBar_;
