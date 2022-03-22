import React, { useState } from 'react';
import './login.less';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { bem } from '../../utils/bem';
import { LayoutContext } from '../Layout';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { getMoods, login } from '../../features/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const classname = bem('log-in');

const LogIn = () => {
  const { isMobile } = React.useContext(LayoutContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const cardWidth = isMobile ? '100%' : 432;
  const redirectPath = location.state?.path || '/';

  async function authenticateUser() {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const res = await response.json();
      if (res.success) {
        dispatch(login({ user: _.omit(res.data, 'password') }));
        dispatch(getMoods());
        navigate(redirectPath, { replace: true });
      } else {
        setErrorMessage(res.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleClick() {
    await authenticateUser();
  }
  //TODO: add front end data validation
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
              component="div"
              align="center"
              sx={{ py: 2 }}>
              Log In to MindSpa
            </Typography>
            <TextField
              required
              id="username-input"
              label="Username"
              placeholder="Enter username"
              fullWidth
              aria-label="Username textfield"
              sx={{ pb: 2 }}
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              required
              id="password-input"
              label="Password"
              placeholder="Enter password"
              fullWidth
              type="password"
              aria-label="Password textfield"
              sx={{ pb: 2 }}
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox name="checkedBox" color="primary" />}
              label="Remember me"
              sx={{ pb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleClick}>
              Log In
            </Button>
            {!!errorMessage.length && (
              <Typography
                variant="body1"
                align="center"
                color="red"
                sx={{ pt: 2 }}>
                {errorMessage}
              </Typography>
            )}
            <Typography variant="body1" align="center" sx={{ pt: 2 }}>
              Don't have an account?{' '}
              <Link variant="body1" href="/sign-up" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LogIn;
