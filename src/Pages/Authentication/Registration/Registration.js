import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';



const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, registerUser, error } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 30 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {isLoading
                        ? <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                        : <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', mb: 1 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', mb: 4 }}
                                id="standard-password-input"
                                label="Confirm Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: '75%', mb: 4 }}
                            >
                                Register
                            </Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button
                                    variant="text"
                                >
                                    Already Registered? Please Login
                                </Button>
                            </NavLink>
                        </form>}
                    {
                        user?.email && <Alert severity="success">User created successfully</Alert>
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

export default Registration;