import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100% - 72px)',
    'margin-left': 20,
    'margin-right': 20,
    'margin-top': 20,
    overflow: 'hidden',
    position: 'relative',
  },
}));

export default useStyles;
