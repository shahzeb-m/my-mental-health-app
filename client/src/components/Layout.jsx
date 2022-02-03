import { Masthead } from './Masthead';
import { Home } from './pages/Home';
import './layout.less';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BREAKPOINTS } from '../utils/consts';

export const LayoutContext = React.createContext({
  isDesktop: false,
  isTabletLarge: false,
  isTabletSmall: false,
  isMobile: false,
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
      <Masthead />
      <Home />
    </LayoutContext.Provider>
  );
}
