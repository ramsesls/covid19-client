import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'padding-left': 5,
    'padding-right': 5,

    '& img': {
      width: 'auto',
      height: 30,
    },
  },
}));

export default useStyles;
