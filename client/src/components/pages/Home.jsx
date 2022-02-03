import { bem } from '../../utils/bem';
import './home.less';
import { LayoutContext } from '../Layout';
import React from 'react';

const classname = bem('home');

export function Home() {
  const layout = React.useContext(LayoutContext);
  // return <div className={classname()}>Home</div>;
  return <div className={classname()}>{JSON.stringify(layout)}</div>;
}
