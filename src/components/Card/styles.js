import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  title: {
    height: 40,
    'padding': 5,
    'border-left': '10px solid',
    'border-color': options => options.color || '#2196f3',
  },
  root: {
    display: 'flex',
    'flex-direction': 'column',
    overflow: 'hidden',
    height: '100%',
  },
  content: {
    width: '100%',
    height: 'calc(100% - 30px)',
    overflow: 'hidden',
  }
}));

export default useStyles;
