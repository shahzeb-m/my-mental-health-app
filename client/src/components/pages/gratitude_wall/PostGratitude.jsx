import { bem } from '../../../utils/bem';
import './postgratitude.less';
import React, { useState } from 'react';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import { LayoutContext } from '../../Layout';
import { getGratitudePosts } from '../../../features/userSlice';
import { updateGratitudePosts } from '../../../api/gratitudePost';
import { useDispatch } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';

const classname = bem('post-gratitude');

export function PostGratitude() {
  const { isDesktop, isTabletLarge, isTabletSmall } =
    React.useContext(LayoutContext);
  const [content, setContent] = useState('I am grateful for ');
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [showSaveFail, setShowSaveFail] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const dispatch = useDispatch();

  const headerFont =
    isDesktop || isTabletLarge ? 'h2' : isTabletSmall ? 'h3' : 'h4';
  const paddingValue = isDesktop || isTabletLarge ? 3 : isTabletSmall ? 2 : 1;

  const savePost = async () => {
    const date = new Date();
    const post = { content: content, date: date };
    try {
      const res = await updateGratitudePosts(post);
      if (res.status !== 201) {
        setShowSaveFail(true);
      } else {
        setShowSaveSuccess(true);
        await dispatch(getGratitudePosts());
        window.location.href = '/gratitude-wall';
      }
    } catch (err) {
      console.log(err);
      setShowSaveFail(true);
    }
  };

  const handleSave = () => {
    content.length ? savePost() : setShowInvalid(true);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
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
        Add to Gratitude Wall
      </Typography>
      <Typography variant="h6">What are you grateful for? </Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Write what you are grateful for here..."
        multiline
        maxRows={8}
        value={content}
        onChange={handleContentChange}
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
      <Snackbar
        open={showSaveSuccess}
        autoHideDuration={6000}
        onClose={handleSaveSuccessClose}>
        <Alert
          onClose={handleSaveSuccessClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}>
          Gratitude Post Saved!
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
          Failed to save post.
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
          Gratitude post cannot be empty.
        </Alert>
      </Snackbar>
    </div>
  );
}
