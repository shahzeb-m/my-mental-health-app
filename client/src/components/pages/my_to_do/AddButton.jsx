import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

export const AddButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      // sx={{ width: '25%' }}
      startIcon={<AddIcon />}
      href="my-to-do/new-entry">
      Add New TO-DO
    </Button>
  );
};
