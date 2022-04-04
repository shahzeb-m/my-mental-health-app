import './settings.less';
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { bem } from '../../utils/bem';
import { LayoutContext } from '../Layout';
import { persistor } from '../../app/store';
import MenuItem from '@mui/material/MenuItem';
import { getQuoteCategories } from '../../api/quote';
import _ from 'lodash';
import { THEME_COLOURS } from '../../utils/consts';
import { ColorPalette } from 'mui-color';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuoteCategory,
  updateQuoteCategory,
  updateThemeColour,
} from '../../features/userSlice';
import { deleteUser } from '../../api/users';

const classname = bem('settings');

const ColourPicker = () => {
  const dispatch = useDispatch();
  const palette = _.mapValues(THEME_COLOURS, (colour) => {
    return colour.main;
  });

  function handleSelect(colour) {
    console.log(colour);
    dispatch(updateThemeColour(colour));
  }

  return (
    <div className={classname('colour-palette')}>
      <ColorPalette palette={palette} onSelect={handleSelect} />
    </div>
  );
};

//TODO: store quote in redux store for faster load time

const Settings = () => {
  const [categoryList, setCategoryList] = React.useState([]);
  const [showDialog, setShowDialog] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = React.useState(false);
  const [showDeleteFail, setShowDeleteFail] = React.useState(false);
  const dispatch = useDispatch();
  const category = useSelector(selectQuoteCategory);
  const { isMobile } = React.useContext(LayoutContext);
  const cardWidth = isMobile ? '100%' : 432;

  async function fetchCategories() {
    const categories = await getQuoteCategories();
    setCategoryList(_.keys(categories));
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleChange(event) {
    await dispatch(updateQuoteCategory(event.target.value));
    setShowAlert(true);
  }

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowAlert(false);
  };

  const handleDeleteClick = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const handleDeleteSuccessClose = () => {
    setShowDeleteSuccess(false);
  };

  const handleDeleteFailClose = () => {
    setShowDeleteFail(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const success = await deleteUser();
      if (success) {
        setShowDialog(false);
        setShowDeleteSuccess(true);
        await persistor.purge();
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
      } else {
        setShowDeleteFail(true);
      }
    } catch (err) {
      console.log(err);
      setShowDeleteFail(true);
    }
  };

  const logOut = async () => {
    try {
      await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      await persistor.purge();
      window.location.href = '/login';
    } catch (err) {
      console.log(err);
    }
  };

  async function handleLogOutClick() {
    await logOut();
  }
  return (
    <div className={classname(isMobile && 'mobile')}>
      <div className={classname('card', isMobile && 'mobile')}>
        <Card
          variant="outlined"
          sx={{
            width: cardWidth,
          }}>
          <CardContent>
            <Typography
              variant="h5"
              fullWidth
              component="div"
              align="center"
              sx={{ py: 2 }}>
              Settings
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="demo-simple-select-label">
                Quote of the Day Category
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Quote of the Day Category"
                onChange={handleChange}>
                {categoryList.map((item) => (
                  <MenuItem key={item} id={item} value={item}>
                    {_.capitalize(item)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography variant="h6" align="left">
              Select Theme Colour
            </Typography>
            <ColourPicker />
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleLogOutClick}>
              Log Out
            </Button>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleDeleteClick}>
              Delete Account
            </Button>
          </CardActions>
        </Card>
      </div>
      <Dialog
        open={showDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delete your account?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting your account will erase all of your data. Any information
            entered into the app will not be recoverable and you will need to
            create a new account to use the app again. Are you sure you want to
            delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>No</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}>
          Quote of the Day Category Updated!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showDeleteSuccess}
        autoHideDuration={6000}
        onClose={handleDeleteSuccessClose}>
        <Alert
          onClose={handleDeleteSuccessClose}
          variant="filled"
          severity="success"
          sx={{ width: '100%' }}>
          Account Deleted!
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
          Failed to delete account.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Settings;
