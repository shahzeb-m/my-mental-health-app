import { bem } from '../../utils/bem';
import './home.less';
import React from 'react';

const classname = bem('home');

export function Home() {
  return <div className={classname()}>Home</div>;
}
