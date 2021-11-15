import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Typography from '@mui/material/Typography';
import Navigation from '../../Shared/Navigation/Navigation';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ my: 5 }}>
                    Best of our Products
                </Typography>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Product
                                key={product.name}
                                product={product}
                            ></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Products;