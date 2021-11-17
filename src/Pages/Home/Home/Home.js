import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NewsLetter from '../../Shared/NewsLetter/NewsLetter';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Product from '../Product/Product';

const Home = () => {
    // products.slice(0, 6).map

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-tundra-98967.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Brands></Brands>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ my: 5 }}>
                    Best of our Products
                </Typography>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.slice(0, 6).map(product => <Product
                                key={product.name}
                                product={product}
                            ></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
            <ContactUs></ContactUs>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;