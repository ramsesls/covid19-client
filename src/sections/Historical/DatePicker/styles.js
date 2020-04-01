import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'row',
  },
  picker: {
    '&:first-child': {
      'margin-right': 10,
    },
    'max-widht': '100%',
    'widht': '100%',
    '& > div': {
      'max-height': '100%'
    },
  },
}));

export default useStyles;
