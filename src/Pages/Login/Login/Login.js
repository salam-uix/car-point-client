import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

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
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '60%' }} src="https://i.ibb.co/yhM0pgT/user.png" alt="login" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard"
                        />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit">
                            Login
                        </Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">New user? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Logged in successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;