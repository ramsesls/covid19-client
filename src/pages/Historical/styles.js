import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100% - 72px)',
    'margin-left': 20,
    'margin-right': 20,
    'margin-top': 20,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
  },
  controls: {
    'min-height': 50,
    'padding-top': 10,
    'padding-bottom': 10,
  },
  settings: {
    'border-bottom': `1px ${theme.palette.grey[400]} solid`,
    'align-items': 'center',
    'padding-left': theme.spacing(2),
    'padding-right': theme.spacing(2),
  },
  player: {
    'border-top': `1px ${theme.palette.grey[400]} solid`,
  },
  toggle: {
    display: 'flex',
    'align-items': 'center',
    height: '100%',
  }
}));

export default useStyles;
