import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMoods } from '../../features/userSlice';
import _ from 'lodash';
import { consecutiveDays } from '../../utils/date';

export function MoodWidget() {
  const moods = useSelector(selectMoods);
  const dates = _.map(moods, (mood) => new Date(mood.date));
  const days = moods?.length ? consecutiveDays(dates) : 0;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Mood Logged
          </Typography>
          <Typography variant="h4" align="center" py={2} color="primary">
            {days}
          </Typography>
          <Typography variant="body2" align="center">
            {days > 1
              ? 'days in a row. Well done!'
              : days === 1
              ? 'day in a row. Keep going!'
              : 'days in a row. Log your mod now'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="/mood-journal/new-entry">
            Log your mood
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
