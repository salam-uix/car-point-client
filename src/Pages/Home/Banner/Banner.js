import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import carBanner from '../../../images/car_for_banner.jpg'
import { Button, Container, Typography } from '@mui/material';
import './Banner.css';




const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Box className="banner-bg">
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3" sx={{ color: 'white' }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300, color: 'white', my: 3 }}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                            </Typography>
                            <Button variant="contained">Explore more</Button>
                        </Box>

                    </Grid>
                    {/* <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '350px' }} src={carBanner} alt="" />
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;