import { Button } from '@mui/material';
import React, { useEffect } from 'react';

export const MoodButton = ({ mood, onClick, highlight }) => {
  const [emoji, setEmoji] = React.useState('');
  const variant = highlight ? 'contained' : 'outlined';
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
