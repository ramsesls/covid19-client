import { extendDefaultTheme, defaultTheme } from '@nivo/core';
import { useStore } from 'store';

const additionalStylesForLineChartDarkMode = {
  textColor: '#FFFFFF',
  grid: {
    line: {
      stroke: '#181414',
    },
  },
  crosshair: {
    line: {
      stroke: '#f50057',
    },
  },
  tooltip: {
    container: {
      background: '#181414',
    },
  },
  axis: {
    ticks: {
      line: {
        stroke: '#fff',  
      }
    }
  }
};

function useNivoTheme() {
  const { state: { themeMode } } = useStore();

  const theme = themeMode === 'dark'
    ? extendDefaultTheme(
        defaultTheme,
        additionalStylesForLineChartDarkMode,
      )
    : defaultTheme;

  return theme;
}

export default useNivoTheme;
