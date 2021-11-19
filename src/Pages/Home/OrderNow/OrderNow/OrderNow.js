import { CardMedia, Grid, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const OrderNow = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://afternoon-tundra-98967.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <div>
            <Navigation></Navigation>
            <h2 className="text-center my-5">You are very close to complete purchase</h2>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <CardMedia
                        component="img"
                        height="500"
                        width="auto"
                        image={product.img}
                        alt="green iguana"
                    />
                </Grid>
                <Grid item xs={4}>
                    <h3>{product.name}</h3>
                    <h6>Price: {product.price}</h6>
                    <p>{product.description}</p>

                    <NavLink to="/proceedOrder">
                        <Button variant="contained">Proceed Order</Button>
                    </NavLink>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );
};

export default OrderNow;