import {
  Alert,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Snackbar,
  Tooltip,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { deleteGratitudePost } from '../../../api/gratitudePost';
import { getGratitudePosts } from '../../../features/userSlice';

export const GratitudeCard = ({ content, date, id }) => {
  const [showDeleteSuccess, setShowDeleteSuccess] = React.useState(false);
  const [showDeleteFail, setShowDeleteFail] = React.useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const success = await deleteGratitudePost(id);
      if (success) {
        setShowDeleteSuccess(true);
        dispatch(getGratitudePosts());
      } else {
        setShowDeleteFail(true);
      }
    } catch (err) {
      console.log(err);
      setShowDeleteFail(true);
    }
  };

  const handleDeleteSuccessClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowDeleteSuccess(false);
  };

  const handleDeleteFailClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowDeleteFail(false);
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card
        aria-label="gratitude-card"
        sx={{
          minWidth: 275,
          display: 'flex',
          flexDirection: 'column',
          '& .MuiButtonBase-root': { display: 'none' },
          ':hover': {
            '& .MuiButtonBase-root': { display: 'inline-flex' },
            boxShadow: 6,
          },
          '@media (pointer:coarse)': {
            '& .MuiButtonBase-root': { display: 'inline-flex' },
          },
        }}>
        <CardContent
          aria-label="gratitude-card"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            ':last-child': { pb: 2 },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
            aria-label="gratitude-card">
            <Typography variant="body1" aria-label="gratitude-card">
              {content}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 'max-content',
          }}>
          <Typography variant="body2" aria-label="gratitude-card">
            {date}
          </Typography>
          <Tooltip title="Delete This Entry">
            <IconButton
              aria-label="delete"
              size="small"
              color="inherit"
              sx={{ padding: 0 }}
              onClick={handleDelete}>
              <ClearIcon aria-label="delete" fontSize="small" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <Snackbar
        open={showDeleteSuccess}
        autoHideDuration={6000}
        onClose={handleDeleteSuccessClose}>
        <Alert
          onClose={handleDeleteSuccessClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}>
          Gratitude post deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showDeleteFail}
        autoHideDuration={6000}
        onClose={handleDeleteFailClose}>
        <Alert
          onClose={handleDeleteFailClose}
          variant="filled"
          severity="error"
          sx={{ width: '100%' }}>
          Failed to delete gratitude post.
        </Alert>
      </Snackbar>
    </Grid>
  );
};
