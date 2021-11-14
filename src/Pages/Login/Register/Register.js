import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Register = () => {

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
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-type password"
                            type="password"
                            name="password2"

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
                    </form>

                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;