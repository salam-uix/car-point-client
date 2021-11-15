import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            Alert('Your did not match')
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
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
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-type password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit">
                            Register
                        </Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already registerd? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;