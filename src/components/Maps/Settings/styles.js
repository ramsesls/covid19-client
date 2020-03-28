import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: props => props.isMobile ? 'relative' : 'absolute',
    width: props => props.isMobile ? '100%' : 330,
    height: props => props.dividedInto ? 150 : 100,
    'padding': 20,
    'z-index': 1,
  },
  title: {
    'margin-bottom': 10, 
  },
  formControl: {
    width: '100%',
    'margin-bottom': 10,
  }
}));

export default useStyles;
