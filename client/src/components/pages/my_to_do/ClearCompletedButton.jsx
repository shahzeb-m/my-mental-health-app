import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

export const ClearCompletedButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      startIcon={<DeleteIcon />}>
      Clear Completed
    </Button>
  );
};
