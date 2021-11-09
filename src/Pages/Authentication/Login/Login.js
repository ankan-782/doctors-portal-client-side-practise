import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Navigation from '../../Shared/Navigation/Navigation';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, loginUser, error, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 30 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    {isLoading
                        ? <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                        : <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard"
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', mb: 4 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: '75%', mb: 2 }}
                            >
                                Login
                            </Button>
                            <br />
                            <Button
                                onClick={handleGoogleSignIn}
                                variant="contained"
                                sx={{ width: '75%', mb: 4 }}
                            >
                                Google Sign In
                            </Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button
                                    variant="text"
                                >
                                    New User? Please Register
                                </Button>
                            </NavLink>
                        </form>}
                    {
                        user?.email && <Alert severity="success">User logged in successfully</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;