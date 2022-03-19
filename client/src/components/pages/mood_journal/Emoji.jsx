import React from 'react';
import { bem } from '../../../utils/bem';
import './emoji.less';

const Emoji = ({ symbol, label }) => {
  const classname = bem('emoji');
  return (
    <span
      role="img"
      className={classname()}
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}>
      {symbol}
    </span>
  );
};

export default Emoji;
