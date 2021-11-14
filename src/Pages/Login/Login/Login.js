import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Login = () => {

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
                    <form>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            name="email"

                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your password"
                            type="password"
                            name="password"

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