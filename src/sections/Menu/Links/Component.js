import React from 'react';

import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

import Tooltip from '@material-ui/core/Tooltip';

import { icons, repository, jhuWebSite, authorInfo } from 'config';

import useStyles from './styles';

export default function Links({ onDialogOpen }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Tooltip arrow title={authorInfo.message}>
        <Button onClick={onDialogOpen}>
          <EmailIcon />
        </Button>
      </Tooltip>
      <Tooltip arrow title="It's open source">
        <Button target="_blank" rel="noreferrer" href={repository}>
          <img src={icons.github} alt="github icon"/>
        </Button>
      </Tooltip>
      <Tooltip arrow title="Data comes from">
        <Button target="_blank" rel="noreferrer" href={jhuWebSite}>
          <img src={icons.jhu} alt="jhu icon"/>
        </Button>
      </Tooltip>
    </List>
  );
};
