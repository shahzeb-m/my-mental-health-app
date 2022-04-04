import { bem } from '../../utils/bem';
import './breathing.less';
import React from 'react';
import { Typography } from '@mui/material';
import { LayoutContext } from '../Layout';
import animation from '../../assets/breathing_exercise.gif';
import { InfoButton } from '../InfoButton';

const classname = bem('breathing');

const information =
  'The 4-7-8 breathing technique is based on Pranayama breathing exercises. ' +
  'Pranayama is the ancient yogic practice of controlling your breath. ' +
  'These types of mindful breathing exercises have been shown to have many benefits for stress reduction and relaxation. [https://www.webmd.com/balance/what-to-know-4-7-8-breathing]' +
  ' The animation below has been sourced from duffthepsych.com.';

export function Breathing() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  return (
    <div className={classname()}>
      <div className={classname('title')}>
        <Typography variant={headerFont}>Breathing Exercise</Typography>
        <InfoButton information={information} />
      </div>
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
