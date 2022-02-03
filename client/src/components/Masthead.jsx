import { bem } from '../utils/bem';
import './masthead.less';

const classname = bem('masthead');

export function Masthead() {
  return <div className={classname()}>Masthead</div>;
}
