import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    textDecoration: 'none',
    display: 'flex',
    color: 'inherit',
    width: '100%',
    '&:visited, &:active, &:focus': {
      color: 'inherit',
    },
  }
}));
