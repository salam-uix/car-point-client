import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
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
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
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
                    </form>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;