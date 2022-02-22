import { Outlet } from 'react-router-dom';
import React from 'react';
import { LayoutContext } from './Layout';
import { bem } from '../utils/bem';
import './contentwrapper.less';

const classname = bem('content-wrapper');

export function ContentWrapper() {
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
      {/*{JSON.stringify({*/}
      {/*  isDesktop,*/}
      {/*  isTabletLarge,*/}
      {/*  isTabletSmall,*/}
      {/*  isMobile,*/}
      {/*})}*/}
      <Outlet />
    </div>
  );
}
