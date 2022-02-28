import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

export function MoodWidget() {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Mood Logged
          </Typography>
          <Typography variant="h4" align="center" py={2} color="#1976d2">
            13
          </Typography>
          <Typography variant="body2" align="center">
            days in a row. Well done!
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
