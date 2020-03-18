import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const getTheme = themeMode => {

  const palette = {
    type: themeMode,
  };

  return createMuiTheme({ palette });
};

export default getTheme;
