import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  controls: {
    'padding-top': 15,
    'padding-bottom': 15,
  },
  settings: {
    'border-bottom': `1px ${theme.palette.grey[400]} solid`,
    'align-items': 'center',
    'padding-left': theme.spacing(2),
    'padding-right': theme.spacing(2),
  },
  toggle: {
    display: 'flex',
    'align-items': 'center',
    height: '100%',
  },
}));

export default useStyles;
