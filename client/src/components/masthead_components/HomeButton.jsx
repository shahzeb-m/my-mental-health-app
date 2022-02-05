import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { bem } from '../../utils/bem';
import './homebutton.less';
import { Tooltip } from '@mui/material';

const classname = bem('masthead-home-button');

export function HomeButton() {
  return (
    <div className={classname()}>
      <Tooltip title="Go to Home">
        <IconButton
          aria-label="home"
          size="large"
          color="inherit"
          href={'/home'}>
          <HomeRoundedIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
