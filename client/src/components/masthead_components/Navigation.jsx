import './navigation.less';
import * as React from 'react';
import { LayoutContext } from '../Layout';
import { bem } from '../../utils/bem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const classname = bem('masthead-navigation');

//TODO create object of key/name pairs to use key as href for page
const pages = [
  'Mood Journal',
  'Gratitude Wall',
  'Worry Not',
  'My To-do',
  'Knowledge Hub',
  'Breathing',
];

export function Navigation() {
  const { isTabletSmall, isMobile } = React.useContext(LayoutContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className={classname()}>
      {isMobile || isTabletSmall ? (
        <>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        pages.map((page) => (
          <Button
            key={page}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}>
            {page}
          </Button>
        ))
      )}
    </div>
  );
}
