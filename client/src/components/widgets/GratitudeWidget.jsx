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

const colors = [
  {
    to: 25,
    color: '#0058e9',
  },
  {
    from: 25,
    to: 50,
    color: '#37b400',
  },
  {
    from: 50,
    to: 75,
    color: '#ffc000',
  },
  {
    from: 75,
    color: '#f31700',
  },
];

const posts = 2;
const target = 3;
export function GratitudeWidget() {
  const arcOptions = {
    value: (posts / target) * 100,
    colors,
  };
  const arcCenterRenderer = (value, color) => {
    return (
      <Typography variant="h4" align="center" style={{ color: color }}>
        {posts}/{target}
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
          {/*<Typography variant="h4" align="center" py={1} color="#1976d2">*/}
          {/*  2/3*/}
          {/*</Typography>*/}
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
            of your daily target. Well done!
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
