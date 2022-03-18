import { Masthead } from './Masthead';
import './layout.less';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BREAKPOINTS, THEME_COLOURS } from '../utils/consts';
import { Content } from './Content';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { bem } from '../utils/bem';
import './layout.less';
import { useSelector } from 'react-redux';
import { selectThemeColour } from '../features/userSlice';

const classname = bem('layout');

export const LayoutContext = React.createContext({
  isDesktop: false,
  isTabletLarge: false,
  isTabletSmall: false,
  isMobile: false,
});

export function Layout() {
  const themeColour = useSelector(selectThemeColour);
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

  const theme = createTheme({
    palette: {
      primary: THEME_COLOURS[themeColour],
      background: {
        default: THEME_COLOURS[themeColour].bg,
      },
    },
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

  return (
    <LayoutContext.Provider
      value={{ isDesktop, isTabletLarge, isTabletSmall, isMobile }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classname()}>
          <Masthead />
          <Content />
        </div>
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}
