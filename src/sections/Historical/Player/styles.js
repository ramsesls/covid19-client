import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    'border-top': `1px ${theme.palette.grey[400]} solid`,
  },
  box: {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    width: '100%',
    'padding-left': 10,
    'padding-right': 10,
  },
  progressWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    'align-items': 'center',
    'padding-left': 10,
    'padding-right': 10,
  },
  progress: {
    width: '100%',
    '&.without-transition > div': {
      transition: 'none',
    },
  },
  pad: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    'align-items': 'center',
    '&:hover:before': {
      transform: 'scale(1.7)',
    },
    '&:hover:after': {
      transform: 'scale(1)',
    },
    transition: 'transform .4s linear',
    '&.without-transition': {
      transition: 'none',
    },
    '&:before': {
      content: '""',
      height: 20,
      width: 20,
      transform: 'scale(1)',
      transition: 'transform .1s linear',
      left: -10,
      cursor: 'pointer',
      background: theme.palette.success.main,
      'border-radius': '50%',
      position: 'absolute',
    },
    '&:after': {
      content: props => `"${props.date}"`,
      transform: props => `scale(${Number(props.isPlaying)})`,
      color: theme.palette.type === 'light' ? 'white' : 'black',
      background: theme.palette.type === 'light' ? 'black' : 'white',
      position: 'absolute',
      left: -45,
      top: -44,
      width: 100,
      height: 24,
      opacity: 0.5,
      'border-radius': '5%',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    }
  },
  draggable: {
    color: 'red',
  },
  tooltip: {
    top: 10,
    left: 10,
  },
  controls: {
    'min-height': 50,
    'padding-top': 10,
    'padding-bottom': 10,
  },
}));

export default useStyles;
