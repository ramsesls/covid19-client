import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    'max-width': '100%',
    'width': '100%',
  },
  tag: {
    width: 100,
    'white-space': 'nowrap',
    'overflow': 'hidden',
    'text-overflow': 'ellipsis',
    'margin-right': 5,
  }
}));

export default useStyles;
