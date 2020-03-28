import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  controls: {
    position: 'absolute',
    'z-index': 1,
    top: -theme.spacing(2),
    left: -theme.spacing(2),
    width: 225,
    height: 50,
    'padding-left': 5,
    display: 'flex',
    'align-items': 'center',
    'border-top-right-radius': 0,
    'border-bottom-left-radius': 0,

  },
  root: {
    position: 'relative',
  },
  icon: {
    'margin-left': 10,
  },
}));

export default useStyles;
