import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { bem } from '../../utils/bem';
import './settingsbutton.less';
import { Tooltip } from '@mui/material';

const classname = bem('masthead-settings-button');

export function SettingsButton() {
  return (
    <div className={classname()}>
      <Tooltip title="Open Settings">
        <IconButton
          aria-label="settings"
          size="large"
          color="inherit"
          href={'/settings'}>
          <SettingsIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
