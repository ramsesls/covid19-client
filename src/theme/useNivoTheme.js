import { extendDefaultTheme, defaultTheme } from '@nivo/core';
import { useStore } from 'store';

import { chartDefaults } from 'config';

function useNivoTheme() {
  const { state: { themeMode } } = useStore();

  const theme = themeMode === 'dark'
    ? extendDefaultTheme(
        defaultTheme,
        chartDefaults.darkMode,
      )
    : defaultTheme;

  return theme;
}

export default useNivoTheme;
