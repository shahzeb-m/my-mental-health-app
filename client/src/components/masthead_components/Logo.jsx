import Typography from '@mui/material/Typography';
import * as React from 'react';
import { LayoutContext } from '../Layout';
import { bem } from '../../utils/bem';
import './logo.less';

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
      <Typography variant="h6" noWrap component="div">
        LOGO
      </Typography>
    </div>
  );
}
