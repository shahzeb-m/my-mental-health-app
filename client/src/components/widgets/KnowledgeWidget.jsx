import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import React from 'react';

export function KnowledgeWidget() {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Need Someone To Talk To?
          </Typography>
          <Typography variant="body1" py={2}>
            Whatever you're going through, you can call the Samaritans at any
            time for free.
          </Typography>
          <Button
            variant="contained"
            startIcon={<CallIcon />}
            href="tel: 116 123"
            size="large">
            Call 116 123
          </Button>
        </CardContent>
        <CardActions>
          <Button size="small" href="/knowledge-hub">
            See more resources
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
