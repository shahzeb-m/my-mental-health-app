import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { ToDoList } from '../ToDoList';

export function ToDoWidget() {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Today's To-Do
          </Typography>
          <ToDoList />
        </CardContent>
        <CardActions>
          <Button size="small" href="/my-to-do">
            Go to My To-Do
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
