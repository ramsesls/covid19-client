import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import MapIcon from '@material-ui/icons/Map';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Link from 'components/Link';
import { noop, isMobile } from 'utils';

import clsx from 'clsx';
import { useLocation } from 'react-router-dom';


export const MainList = ({ handleMenuClose }) => {
  const location = useLocation();

  return <List>
    <div>
      <ListItem onClick={handleMenuClose} button selected={location.pathname === '/dashboard'}>
        <Link to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItem>
      <ListItem onClick={handleMenuClose} button selected={location.pathname === '/map'}>
        <Link to="/map">
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="World Map" />
        </Link>
      </ListItem>
      <ListItem onClick={handleMenuClose} button selected={location.pathname === '/analytics'}>
        <Link to="/analytics">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </Link>
      </ListItem>
      <ListItem onClick={handleMenuClose} button selected={location.pathname === '/what-to-do'}>
        <Link to="/what-to-do">
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="What To Do?" />
        </Link>
      </ListItem>
    </div>
  </List>
};

function ContactsDialog({ handleDialogClose, open }) {
  return (
    <Dialog onClose={handleDialogClose} aria-labelledby="contacts-dialog" open={open}>
      <DialogTitle id="contacts-dialog">To Contact The Author</DialogTitle>
      <List>
        <ListItem button>
          <a href="mailto: contact@surenatoyan.com" className="link-without-styles">
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="contact@surenatoyan.com" />
          </a>
        </ListItem>
      </List>
    </Dialog>
  );
}

export const SecondaryList = ({ handleDialogOpen }) => {
  const location = useLocation();

  return (
    <List className="at-the-bottom">
      <div>
        <ListItem button onClick={handleDialogOpen} selected={location.pathname === '/contacts'}>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
      </div>
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

export default function Menu({ isMenuOpen, handleMenuClose }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleDialogClose() {
    setOpen(false);
  }

  function handleDialogOpen() {
    setOpen(true);
    handleMenuClose();
  }

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      classes={{
        paper: clsx(classes.drawerPaper, !isMenuOpen && classes.drawerPaperClose),
      }}
      open={isMenuOpen}
      onClose={isMobile ? handleMenuClose : noop}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleMenuClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <MainList handleMenuClose={isMobile ? handleMenuClose : noop} />
      <Divider />
      <SecondaryList handleDialogOpen={handleDialogOpen} />
      <ContactsDialog open={open} handleDialogClose={handleDialogClose} />
    </Drawer>
  );
}
