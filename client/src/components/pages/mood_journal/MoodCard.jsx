import {
  Alert,
  Box,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Tooltip,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect } from 'react';
import Emoji from './Emoji';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { getMoods } from '../../../features/userSlice';
import { deleteMood } from '../../../api/mood';

export const MoodCard = ({ mood, date, comment, id }) => {
  const [showFull, setShowFull] = React.useState(false);
  const [emoji, setEmoji] = React.useState('');
  const [showDeleteSuccess, setShowDeleteSuccess] = React.useState(false);
  const [showDeleteFail, setShowDeleteFail] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (mood) {
      case 'Great':
        setEmoji('😀');
        break;
      case 'Good':
        setEmoji('🙂');
        break;
      case 'Okay':
        setEmoji('😐');
        break;
      case 'Poor':
        setEmoji('🙁');
        break;
      case 'Bad':
        setEmoji('☹️');
        break;
      default:
        setEmoji('❓');
    }
  }, [mood]);

  const handleDelete = async () => {
    try {
      const success = await deleteMood(id);
      if (success) {
        setShowDeleteSuccess(true);
        dispatch(getMoods());
      } else {
        setShowDeleteFail(true);
      }
    } catch (err) {
      console.log(err);
      setShowDeleteFail(true);
    }
  };

  const handleCardClick = (event) => {
    console.log(event);
    const allowClick =
      event.target.ariaLabel === 'mood-card' ||
      event.target.ariaLabel.includes('Emoji');
    setShowFull((prevState) => allowClick && !prevState);
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
        aria-label="mood-card"
        sx={{
          minWidth: 275,
          display: 'flex',
          '& .MuiButtonBase-root': { display: 'none' },
          ':hover': {
            '& .MuiButtonBase-root': { display: 'inline-flex' },
            boxShadow: 6,
          },
          '@media (pointer:coarse)': {
            '& .MuiButtonBase-root': { display: 'inline-flex' },
          },
        }}
        onClick={handleCardClick}>
        <CardContent
          aria-label="mood-card"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            ':last-child': { pb: 2 },
          }}>
          <Box
            sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
            aria-label="mood-card">
            <Emoji
              symbol={emoji}
              label="Great Mood Emoji"
              aria-label="mood-card"
            />
            <Typography variant="h6" sx={{ pl: 1 }} aria-label="mood-card">
              {mood}
            </Typography>
            <Typography
              variant="body1"
              sx={{ ml: 'auto' }}
              aria-label="mood-card">
              {date}
            </Typography>
            <Tooltip title="Delete This Entry">
              <IconButton
                aria-label="delete"
                size="small"
                color="inherit"
                onClick={handleDelete}>
                <ClearIcon aria-label="delete" />
              </IconButton>
            </Tooltip>
          </Box>
          {showFull &&
            (comment.length ? (
              <Typography variant="body1" sx={{ pt: 1 }} aria-label="mood-card">
                {comment}
              </Typography>
            ) : (
              <Typography
                variant="body1"
                sx={{ pt: 1 }}
                fontStyle="italic"
                aria-label="mood-card">
                No comment.
              </Typography>
            ))}
        </CardContent>
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
          Mood entry deleted!
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
          Failed to delete mood entry.
        </Alert>
      </Snackbar>
    </Grid>
  );
};
