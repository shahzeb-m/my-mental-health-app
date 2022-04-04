import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { Alert, Grid, Snackbar, Tooltip } from '@mui/material';
import { formatDateTime } from '../utils/date';
import { getTodos } from '../features/userSlice';
import { deleteTodo, updateTodo } from '../api/todos';
import { useDispatch } from 'react-redux';

export function ToDoList({ items }) {
  const [showDeleteSuccess, setShowDeleteSuccess] = React.useState(false);
  const [showDeleteFail, setShowDeleteFail] = React.useState(false);
  const dispatch = useDispatch();
  const isWidget = window.location.pathname === '/home';

  const handleToggle = (todo) => {
    return async function () {
      await updateTodo(todo._id, !todo.completed);
      dispatch(getTodos());
    };
  };

  const handleDeleteSuccessClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowDeleteSuccess(false);
  };

  const handleDeleteFailClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowDeleteFail(false);
  };

  const handleDelete = (id) => {
    return async function () {
      try {
        const success = await deleteTodo(id);
        if (success) {
          setShowDeleteSuccess(true);
          dispatch(getTodos());
        } else {
          setShowDeleteFail(true);
        }
      } catch (err) {
        console.log(err);
        setShowDeleteFail(true);
      }
    };
  };

  return (
    <>
      {isWidget ? (
        <List sx={{ width: '100%', maxHeight: '200px', overflowY: 'auto' }}>
          {items.map((todo) => {
            const labelId = `checkbox-list-label-${todo._id}`;

            return (
              <ListItem key={todo._id} disablePadding>
                <ListItemButton
                  sx={{
                    '& .MuiIconButton-root': { display: 'none' },
                    ':hover': {
                      '& .MuiIconButton-root': { display: 'inline-flex' },
                      cursor: 'pointer',
                    },
                    '@media (pointer:coarse)': {
                      '& .MuiIconButton-root': { display: 'inline-flex' },
                    },
                  }}
                  role={undefined}
                  onClick={handleToggle(todo)}
                  dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={todo.completed}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={todo.task}
                    secondary={formatDateTime(todo.date)}
                  />
                  <Tooltip title="Delete ToDo">
                    <IconButton
                      aria-label="delete"
                      size="small"
                      color="inherit"
                      onClick={handleDelete(todo._id)}>
                      <ClearIcon aria-label="delete" />
                    </IconButton>
                  </Tooltip>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Grid
          container
          spacing={{ xs: 0, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          sx={{ py: 2 }}>
          {items.map((todo) => {
            const labelId = `checkbox-list-label-${todo._id}`;

            return (
              <Grid item xs={2} sm={4} md={4}>
                <ListItem key={todo._id} disablePadding>
                  <ListItemButton
                    sx={{
                      '& .MuiIconButton-root': { display: 'none' },
                      ':hover': {
                        '& .MuiIconButton-root': { display: 'inline-flex' },
                        cursor: 'pointer',
                      },
                      '@media (pointer:coarse)': {
                        '& .MuiIconButton-root': { display: 'inline-flex' },
                      },
                    }}
                    role={undefined}
                    onClick={handleToggle(todo)}
                    dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={todo.task}
                      secondary={formatDateTime(todo.date)}
                    />
                    <Tooltip title="Delete ToDo">
                      <IconButton
                        aria-label="delete"
                        size="small"
                        color="inherit"
                        onClick={handleDelete(todo._id)}>
                        <ClearIcon aria-label="delete" />
                      </IconButton>
                    </Tooltip>
                  </ListItemButton>
                </ListItem>
              </Grid>
            );
          })}
        </Grid>
      )}
      <Snackbar
        open={showDeleteSuccess}
        autoHideDuration={6000}
        onClose={handleDeleteSuccessClose}>
        <Alert
          onClose={handleDeleteSuccessClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}>
          To-Do deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showDeleteFail}
        autoHideDuration={6000}
        onClose={handleDeleteFailClose}>
        <Alert
          onClose={handleDeleteFailClose}
          variant="filled"
          severity="error"
          sx={{ width: '100%' }}>
          Failed to delete To-Do.
        </Alert>
      </Snackbar>
    </>
  );
}
