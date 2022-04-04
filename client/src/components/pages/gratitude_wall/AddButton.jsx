import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useContext } from 'react';
import { LayoutContext } from '../../Layout';

export const AddButton = () => {
  const { isMobile } = useContext(LayoutContext);
  const buttonHeight = isMobile ? '68px' : '92px';
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      sx={{ height: buttonHeight }}
      startIcon={<AddIcon />}
      href="gratitude-wall/new-entry">
      Create New Post
    </Button>
  );
};
