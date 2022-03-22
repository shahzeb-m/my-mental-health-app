import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

export const AddButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      sx={{ height: '68px' }}
      startIcon={<AddIcon />}
      href="mood-journal/new-entry">
      Add New Mood
    </Button>
  );
};
