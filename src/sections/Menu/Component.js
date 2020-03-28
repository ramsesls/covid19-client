import React, { useState, lazy } from 'react';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import AsyncComponentLoader from 'components/AsyncComponentLoader';

import { useLocation } from 'react-router-dom';

import Link from 'components/Link';
import { noop, isMobile } from 'utils';
import { menuItems } from 'config';

import useStyles from './styles';

export const MainList = ({ handleMenuClose, items }) => {
  const location = useLocation();

  return <List>
    <div>
      {
        items.map(item => {
          return (
            <ListItem
              onClick={handleMenuClose}
              button
              selected={
                location.pathname === item.path ||
                (location.pathname === '/' && item.isDefault)
              }
              key={item.path}
            >
              <Link to={item.path}>
                <ListItemIcon className="_relative">
                  {AsyncComponentLoader(
                    lazy(() => import(`./icons/${item.icon}`)), { size: 30, withoutBackground: true }
                  )()}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </Link>
            </ListItem>
          );
        })
      }
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

export const OptionalList = ({ handleDialogOpen }) => {
  return (
    <List className="at-the-bottom">
      <div>
        <ListItem button onClick={handleDialogOpen}>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
      </div>
    </List>
  );
};

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
      variant={isMobile ? 'temporary' : 'permanent'}
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
      <MainList items={menuItems.main} handleMenuClose={isMobile ? handleMenuClose : noop} />
      <Divider />
      <OptionalList handleDialogOpen={handleDialogOpen} />
      <ContactsDialog open={open} handleDialogClose={handleDialogClose} />
    </Drawer>
  );
}
