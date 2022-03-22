import './navigation.less';
import * as React from 'react';
import { LayoutContext } from '../Layout';
import { bem } from '../../utils/bem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const classname = bem('masthead-navigation');

const pages = [
  { label: 'Mood Journal', href: '/mood-journal' },
  { label: 'Gratitude Wall', href: '/gratitude-wall' },
  { label: 'Worry Not', href: '/worry-not' },
  { label: 'My To-do', href: '/my-to-do' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Breathing', href: '/breathing' },
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
    <div className={classname((isMobile || isTabletSmall) && 'small')}>
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
              <MenuItem
                component="a"
                key={page.href}
                href={page.href}
                onClick={handleCloseNavMenu}>
                {page.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        pages.map((page) => (
          <Button
            key={page.href}
            href={page.href}
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}>
            {page.label}
          </Button>
        ))
      )}
    </div>
  );
}
