import { bem } from '../../../utils/bem';
import './addtodo.less';
import React, { useState } from 'react';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import SaveIcon from '@mui/icons-material/Save';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { getTodos } from '../../../features/userSlice';
import { updateTodos } from '../../../api/todos';
import { useDispatch } from 'react-redux';

const classname = bem('add-to-do');

export function AddToDo() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [showSaveFail, setShowSaveFail] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;

  const saveTodo = async () => {
    const todo = { task: content, date: date };
    try {
      const res = await updateTodos(todo);
      if (res.status !== 201) {
        setShowSaveFail(true);
      } else {
        setShowSaveSuccess(true);
        await dispatch(getTodos());
        window.location.href = '/my-to-do';
      }
    } catch (err) {
      console.log(err);
      setShowSaveFail(true);
    }
  };

  const handleSave = () => {
    content.length ? saveTodo() : setShowInvalid(true);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleDateChange = (newValue) => {
    console.log('date: ', newValue);
    setDate(newValue);
  };

  const handleSaveSuccessClose = () => {
    setShowSaveSuccess(false);
  };

  const handleSaveFailClose = () => {
    setShowSaveFail(false);
  };

  const handleInvalidClose = () => {
    setShowInvalid(false);
  };
  return (
    <div className={classname()}>
      <Typography variant={headerFont} pb={paddingValue}>
        Add a To-Do
      </Typography>
      <Typography variant="h6">What do you want to do? </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Enter To-Do here..."
        multiline
        maxRows={8}
        value={content}
        onChange={handleContentChange}
        sx={{ my: 2, minWidth: '275px' }}
      />
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DateTimePicker
          label="Date & Time"
          inputFormat="dd/MM/yyyy"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField {...params} sx={{ width: 'fit-content' }} />
          )}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        size="large"
        fullWidth
        startIcon={<SaveIcon />}
        sx={{ width: '128px', mt: 2 }}
        onClick={handleSave}>
        Save
      </Button>
      <Snackbar
        open={showSaveSuccess}
        autoHideDuration={6000}
        onClose={handleSaveSuccessClose}>
        <Alert
          onClose={handleSaveSuccessClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}>
          To-Do Saved!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showSaveFail}
        autoHideDuration={6000}
        onClose={handleSaveFailClose}>
        <Alert
          onClose={handleSaveFailClose}
          variant="filled"
          severity="error"
          sx={{ width: '100%' }}>
          Failed to save To-Do.
        </Alert>
      </Snackbar>
      <Snackbar
        open={showInvalid}
        autoHideDuration={6000}
        onClose={handleInvalidClose}>
        <Alert
          onClose={handleInvalidClose}
          variant="filled"
          severity="error"
          sx={{ width: '100%' }}>
          To-Do cannot be empty.
        </Alert>
      </Snackbar>
    </div>
  );
}
