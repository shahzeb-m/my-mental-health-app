import { bem } from '../utils/bem';
import './masthead.less';
import { LayoutContext } from './Layout';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Logo } from './masthead_components/Logo';
import { Navigation } from './masthead_components/Navigation';
import { HomeButton } from './masthead_components/HomeButton';
import { SettingsButton } from './masthead_components/SettingsButton';

const classname = bem('masthead');

export function Masthead() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);

  return (
    <AppBar position="sticky">
      <div
        className={classname(
          (isDesktop && 'desktop') ||
            (isTabletLarge && 'tablet-large') ||
            (isTabletSmall && 'tablet-small') ||
            (isMobile && 'mobile'),
        ).mix(classname())}>
        <div
          className={classname('toolbar', isMobile && 'mobile').mix(
            classname('toolbar'),
          )}>
          {isMobile || isTabletSmall ? (
            <>
              <Navigation />
              <Logo />
            </>
          ) : (
            <>
              <Logo />
              <Navigation />
            </>
          )}
          <HomeButton />
          <SettingsButton />
        </div>
      </div>
    </AppBar>
  );
}
