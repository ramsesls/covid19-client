import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    width: '100%',
    'padding-left': 15,
    'padding-right': 15,
  },
  progressWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    'align-items': 'center',
  },
  progress: {
    width: '100%',
  },
  pad: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    'align-items': 'center',
    transition: 'transform .4s linear',
    '&:hover:before': {
      width: 25,
      height: 25,
    },
    '&:before': {
      content: '""',
      height: 20,
      left: -10,
      cursor: 'pointer',
      background: theme.palette.success.main,
      width: 20,
      'border-radius': '50%',
      position: 'absolute',
    },
  },
  draggable: {
    color: 'red',
  }
}));

export default useStyles;
