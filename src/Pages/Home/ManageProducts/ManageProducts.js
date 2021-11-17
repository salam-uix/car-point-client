import React, { useEffect, useState } from 'react';
import { Grid, Button, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-tundra-98967.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://afternoon-tundra-98967.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
                alert('Deleted')
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <h2>Manage Products</h2>
            {
                products.map(product => <div key={product._id}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={4}>
                            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} variant="body1">
                                        {product.price}
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Button onClick={() => handleDelete(product._id)} variant="contained">Delete</Button>

                        </Grid>
                    </Grid>
                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default ManageProducts;