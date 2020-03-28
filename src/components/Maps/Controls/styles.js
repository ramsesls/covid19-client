import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  controls: {
    position: 'absolute',
    'z-index': 1,
    top: 0,
    right: 0,
    width: 110,
    height: 60,
    display: 'flex',
    'align-items': 'center',
    'border-top-left-radius': 0,
    'border-bottom-right-radius': 0,

  },
  icon: {
    'margin-left': 10,
  }
}));

export default useStyles;
