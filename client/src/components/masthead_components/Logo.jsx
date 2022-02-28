import * as React from 'react';
import { LayoutContext } from '../Layout';
import { bem } from '../../utils/bem';
import './logo.less';
import appLogo from '../../assets/app_logo_white.svg';
import { Link } from 'react-router-dom';

const classname = bem('masthead-logo');

export function Logo() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);
  return (
    <div
      className={classname(
        (isDesktop && 'desktop') ||
          (isTabletLarge && 'tablet-large') ||
          (isTabletSmall && 'tablet-small') ||
          (isMobile && 'mobile'),
      )}>
      <a href="/home">
        <img
          alt="MindSpa Logo"
          title="MindSpa Logo"
          src={appLogo}
          className={classname('image')}
        />
      </a>
    </div>
  );
}
