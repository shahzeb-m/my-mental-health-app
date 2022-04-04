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
import { selectTodos } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import _ from 'lodash';

export function ToDoWidget() {
  const todos = useSelector(selectTodos);
  const isToday = (todo) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const todoDay = new Date(todo.date).setHours(0, 0, 0, 0);
    return today === todoDay;
  };

  const filteredTodos = _.filter(todos, isToday);

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Today's To-Do
          </Typography>
          {filteredTodos.length ? (
            <ToDoList items={filteredTodos} />
          ) : (
            <Typography variant="body1" align="center" sx={{ pt: 2 }}>
              You don't have any To-Dos today. Enjoy!
            </Typography>
          )}
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
