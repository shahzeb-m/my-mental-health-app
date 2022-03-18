import React, { useState } from 'react';
import './signup.less';
import {
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { bem } from '../../utils/bem';
import { LayoutContext } from '../Layout';

const classname = bem('sign-up');

const SignUp = () => {
  const { isMobile } = React.useContext(LayoutContext);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const cardWidth = isMobile ? '100%' : 432;

  const registerUser = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          username,
          password,
          confirmPassword,
        }),
      });
      const res = await response.json();
      if (response.status === 201) {
        window.location.href = '/login';
      } else {
        setErrorMessage(res.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  async function handleClick() {
    await registerUser();
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
              Sign Up to MindSpa
            </Typography>
            <TextField
              required
              id="fname-input"
              label="First Name"
              placeholder="Enter first name"
              fullWidth
              aria-label="First name textfield"
              sx={{ pb: 2 }}
              value={name}
              onChange={handleNameChange}
            />
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
            <TextField
              required
              id="confirm-password-input"
              label="Confirm password"
              placeholder="Re-enter password"
              fullWidth
              type="password"
              aria-label="Confirm password textfield"
              sx={{ pb: 2 }}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleClick}>
              Sign Up
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
              Already have an account?{' '}
              <Link variant="body1" href="/login" underline="hover">
                Log In
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
