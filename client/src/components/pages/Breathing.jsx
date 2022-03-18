import { bem } from '../../utils/bem';
import './breathing.less';
import React from 'react';
import { Typography } from '@mui/material';
import { LayoutContext } from '../Layout';
import animation from '../../assets/breathing_exercise.gif';

const classname = bem('breathing');

export function Breathing() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;
  return (
    <div className={classname()}>
      <Typography variant={headerFont} py={paddingValue}>
        Breathing Exercise
      </Typography>
      <div className={classname('animation_container')}>
        <img
          alt="Breathing Exercise"
          src={animation}
          className={classname('animation')}
        />
      </div>
    </div>
  );
}
