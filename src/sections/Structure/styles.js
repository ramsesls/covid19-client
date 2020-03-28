import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    position: 'relative',
  },
  mainSection: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    height: `calc(100% - ${theme.mixins.toolbar.minHeight + 9}px)`,
  },
}));

export default useStyles;
