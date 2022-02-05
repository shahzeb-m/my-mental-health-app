import { Masthead } from './Masthead';
import './layout.less';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BREAKPOINTS } from '../utils/consts';
import { Content } from './Content';
import { createTheme, ThemeProvider } from '@mui/material';

export const LayoutContext = React.createContext({
  isDesktop: false,
  isTabletLarge: false,
  isTabletSmall: false,
  isMobile: false,
});

// Not needed at the moment. Keeping in for future use of theme (05/02/2022)
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: BREAKPOINTS.MOBILE,
      tabletSmall: BREAKPOINTS.SMALL_TABLET,
      tabletLarge: BREAKPOINTS.LARGE_TABLET,
      desktop: BREAKPOINTS.DESKTOP,
      // TODO remove default breakpoints below when no longer needed
      xl: 1536,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
});

export function Layout() {
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.DESKTOP });
  const isTabletLarge =
    useMediaQuery({ minWidth: BREAKPOINTS.LARGE_TABLET }) && !isDesktop;
  const isTabletSmall =
    useMediaQuery({ minWidth: BREAKPOINTS.SMALL_TABLET }) &&
    !isTabletLarge &&
    !isDesktop;
  const isMobile =
    useMediaQuery({ minWidth: BREAKPOINTS.MOBILE }) &&
    !isTabletSmall &&
    !isTabletLarge &&
    !isDesktop;

  return (
    <LayoutContext.Provider
      value={{ isDesktop, isTabletLarge, isTabletSmall, isMobile }}>
      <ThemeProvider theme={theme}>
        <Masthead />
        <Content />
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}
