import { bem } from '../../../utils/bem';
import './logmood.less';
import React, { useState } from 'react';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { MoodButton } from './MoodButton';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch } from 'react-redux';
import { getMoods } from '../../../features/userSlice';
import { updateMoodsDB } from '../../../api/mood';

const classname = bem('log-mood');

const moods = ['Great', 'Good', 'Okay', 'Poor', 'Bad'];

export function LogMood() {
  const { isDesktop, isTabletLarge, isTabletSmall, isMobile } =
    React.useContext(LayoutContext);
  const [selected, setSelected] = useState('');
  const [comment, setComment] = useState('');
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [showSaveFail, setShowSaveFail] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log(e.target.id);
    setSelected(e.target.id);
  };

  const isSelected = (mood) => selected === mood;

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;

  const saveMood = async () => {
    const date = new Date();
    // const yesterday = new Date(date);
    // yesterday.setDate(yesterday.getDate() - 1);
    const mood = { rating: selected, comment: comment, date: date };
    try {
      const res = await updateMoodsDB(mood);
      if (res.status !== 201) {
        setShowSaveFail(true);
      } else {
        setShowSaveSuccess(true);
        await dispatch(getMoods(mood));
        window.location.href = '/mood-journal';
      }
    } catch (err) {
      console.log(err);
      setShowSaveFail(true);
    }
  };

  const handleSave = () => {
    selected.length ? saveMood() : setShowInvalid(true);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
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
        Log Mood
      </Typography>
      <div
        className={classname('content', {
          large: isDesktop || isTabletLarge,
          small: isTabletSmall || isMobile,
        })}>
        <div
          className={classname('mood_selector', {
            large: isDesktop || isTabletLarge,
            small: isTabletSmall || isMobile,
          })}>
          <Typography variant="h6">How are you feeling?</Typography>

          {moods.map((mood) => (
            <MoodButton
              mood={mood}
              onClick={handleClick}
              highlight={isSelected(mood)}
              key={mood}
            />
          ))}
        </div>
        <div className={classname('comments')}>
          <Typography variant="h6">Comments: </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter your comments here... (optional)"
            multiline
            maxRows={8}
            value={comment}
            onChange={handleCommentChange}
            sx={{ mt: 2, minWidth: '275px' }}
          />
          <Button
            variant="contained"
            size="large"
            fullWidth
            startIcon={<SaveIcon />}
            sx={{ width: '128px', mt: 2 }}
            onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
      <Snackbar
        open={showSaveSuccess}
        autoHideDuration={6000}
        onClose={handleSaveSuccessClose}>
        <Alert
          onClose={handleSaveSuccessClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}>
          Mood Saved!
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
          Failed to save mood.
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
          You must select at least one mood.
        </Alert>
      </Snackbar>
    </div>
  );
}
