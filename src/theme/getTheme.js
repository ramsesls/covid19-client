import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const getTheme = themeMode => {

  const isDark = themeMode === 'dark';

  const palette = {
    type: themeMode,
    background: {
      default: isDark ? '#111' : '#fafafa',
    },
    primary: {
      light: '#7986cb',
      main: isDark ? '#333' : '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    }
  };

  return createMuiTheme({ palette });
};

export default getTheme;
