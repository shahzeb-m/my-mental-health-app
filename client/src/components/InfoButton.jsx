import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from '@mui/material';
import React from 'react';

export function InfoButton({ information }) {
  const [showDialog, setShowDialog] = React.useState(false);

  const handleInfoClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Tooltip title="View information">
        <IconButton
          aria-label="information"
          sx={{ height: 'fit-content' }}
          onClick={handleInfoClick}>
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={showDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Information'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {information}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
