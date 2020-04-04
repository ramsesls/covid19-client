import React, { useState } from 'react';

import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';

import PersonIcon from '@material-ui/icons/Person';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useLocation } from 'react-router-dom';

import ListItems from './List';
import Links from './Links';

import { noop, isMobile } from 'utils';
import { menuItems, authorInfo } from 'config';

import useStyles from './styles';

function ContactsDialog({ handleDialogClose, open }) {
  return (
    <Dialog onClose={handleDialogClose} aria-labelledby="contacts-dialog" open={open}>
      <DialogTitle id="contacts-dialog">{authorInfo.message}</DialogTitle>
      <List>
        <ListItem button>
          <a href={`mailto: ${authorInfo.email}`} className="link-without-styles">
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={authorInfo.email} />
          </a>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function handleDialogClose() {
    setOpen(false);
  }

  function handleDialogOpen() {
    setOpen(true);
  }

  return (
    <SwipeableDrawer
      variant={isMobile ? 'temporary' : 'permanent'}
      disableBackdropTransition={false}
      classes={{
        paper: clsx(classes.drawerPaper, !isOpen && !isMobile && classes.drawerPaperClose),
      }}
      open={isOpen}
      onOpen={(onOpen)}
      onClose={isMobile ? (onClose) : noop}
    >
      <div className={classes.toolbarIcon}>
        <IconButton
          onClick={onClose}
          aria-label="close drawer"
          size="medium"
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <ListItems items={menuItems.main} onMenuClose={isMobile ? onClose : noop} location={location} />
      <Divider />
      <Links onDialogOpen={handleDialogOpen} />
      <ContactsDialog open={open} handleDialogClose={handleDialogClose} />
    </SwipeableDrawer>
  );
}
