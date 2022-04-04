import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { ArcGauge } from '@progress/kendo-react-gauges';
import '@progress/kendo-theme-default/dist/all.css';
import { useSelector } from 'react-redux';
import { selectGratitudePosts } from '../../features/userSlice';
import _ from 'lodash';

const colors = [
  {
    to: 33,
    color: '#e53935',
  },
  {
    from: 34,
    to: 67,
    color: '#fdd835',
  },
  {
    from: 68,
    to: 100,
    color: '#43a047',
  },
];

const target = 3; // TODO make customisable target

export function GratitudeWidget() {
  const posts = useSelector(selectGratitudePosts); // have to check for posts created TODAY (use isToday func)
  const isToday = (post) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const postDay = new Date(post.date).setHours(0, 0, 0, 0);
    return today === postDay;
  };

  const filteredPosts = _.filter(posts, isToday);
  const message =
    filteredPosts.length === 0
      ? 'Create a new post now.'
      : filteredPosts.length === 3
      ? 'Well done!'
      : 'Keep going!';
  const arcOptions = {
    value: (filteredPosts.length / target) * 100,
    colors,
  };
  const arcCenterRenderer = (value, color) => {
    return (
      <Typography variant="h4" align="center" style={{ color: color }}>
        {filteredPosts.length}/{target}
      </Typography>
    );
  };
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Gratitude Wall Posts
          </Typography>
          <ArcGauge
            {...arcOptions}
            arcCenterRender={arcCenterRenderer}
            style={{
              width: '100%',
              height: '150px',
              padding: '16px 0',
            }}
          />
          <Typography variant="body2" align="center">
            of your daily target. {message}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="/gratitude-wall/new-entry">
            Post on the wall
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
