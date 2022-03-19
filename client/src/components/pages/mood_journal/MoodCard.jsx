import {
  Box,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect } from 'react';
import Emoji from './Emoji';
import IconButton from '@mui/material/IconButton';

export const MoodCard = ({ mood, date, comment }) => {
  const [showFull, setShowFull] = React.useState(false);
  const [emoji, setEmoji] = React.useState('');

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
        setEmoji('☹');
        break;
      default:
        setEmoji('❓');
    }
  }, [mood]);

  const handleCardClick = () => {
    setShowFull((prevState) => !prevState);
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            ':last-child': { pb: 2 },
          }}>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Emoji symbol={emoji} label="Great Mood Emoji" />
            <Typography variant="h6" sx={{ pl: 1 }}>
              {mood}
            </Typography>
            <Typography variant="body1" sx={{ ml: 'auto' }}>
              {date}
            </Typography>
            <Tooltip title="Delete This Entry">
              <IconButton aria-label="delete" size="small" color="inherit">
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {showFull && (
            <Typography variant="body1" sx={{ pt: 1 }}>
              {comment}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
