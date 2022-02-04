import { bem } from '../utils/bem';
import './masthead.less';
import React from 'react';
import { LayoutContext } from './Layout';

const classname = bem('masthead');

export function Masthead() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);

  return (
    <div
      className={classname(
        (isDesktop && 'desktop') ||
          (isTabletLarge && 'tablet-large') ||
          (isTabletSmall && 'tablet-small') ||
          (isMobile && 'mobile'),
      ).mix(classname())}>
      Masthead
    </div>
  );
}
