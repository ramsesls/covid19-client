import React from 'react';

import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

import { useStore } from 'store';
import { isMobile } from 'utils';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 20,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  theme: {
    minWidth: 130,
  },
}));

const AppBar_ = ({ isMenuOpen, handleMenuOpen }) => {
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
          onClick={handleMenuOpen}
          className={clsx(classes.menuButton, isMenuOpen && !isMobile && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          COVID19 Information Portal
        </Typography>
        <div className={classes.theme}>
          <Typography component="span" noWrap color="inherit">
            light
          </Typography>
          <Switch color="default" checked={themeMode === 'dark'} onChange={handleChangeTheme} />
          <Typography component="span" noWrap color="inherit">
            dark
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBar_;
