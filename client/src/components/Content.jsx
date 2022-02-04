import { bem } from '../utils/bem';
import './content.less';
import { LayoutContext } from './Layout';
import React from 'react';
import { Home } from './pages/Home';

const classname = bem('content');

// this component will handle the rendering of the selected page/activity
export function Content() {
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
      {JSON.stringify({ isDesktop, isTabletLarge, isTabletSmall, isMobile })}
    </div>
  );
  // return (
  //   <div className={classname()}>
  //     <Home />
  //   </div>
  // );
}
