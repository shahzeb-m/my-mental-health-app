import { bem } from '../../../utils/bem';
import './knowledgehub.less';
import React from 'react';
import { Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';

const classname = bem('knowledge-hub');

export function KnowledgeHub() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;
  return (
    <div className={classname()}>
      <Typography variant={headerFont} py={paddingValue}>
        Knowledge Hub
      </Typography>
    </div>
  );
}
