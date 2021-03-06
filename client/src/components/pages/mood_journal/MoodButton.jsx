import { Button } from '@mui/material';
import React, { useEffect } from 'react';

export const MoodButton = ({ mood, onClick, highlight }) => {
  const [emoji, setEmoji] = React.useState('');
  const variant = highlight ? 'contained' : 'outlined';
  useEffect(() => {
    switch (mood) {
      case 'Great':
        setEmoji('đ');
        break;
      case 'Good':
        setEmoji('đ');
        break;
      case 'Okay':
        setEmoji('đ');
        break;
      case 'Poor':
        setEmoji('đ');
        break;
      case 'Bad':
        setEmoji('âšī¸');
        break;
      default:
        setEmoji('â');
    }
  }, [mood]);
  return (
    <Button
      id={mood}
      onClick={onClick}
      variant={variant}
      size="large"
      sx={{ width: '128px' }}>
      {`${emoji} ${mood}`}
    </Button>
  );
};
