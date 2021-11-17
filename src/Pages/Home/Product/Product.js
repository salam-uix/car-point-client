import { Grid, Button } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, img, price } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="body1">
                        {price}
                    </Typography>
                </CardContent>
            </Card>
            <NavLink style={{ textDecoration: 'none' }} to={`/ordernow/${_id}`}>
                <Button variant="contained">Order now</Button>
            </NavLink>

        </Grid>
    );
};

export default Product;