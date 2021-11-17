import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';

const OrderNow = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <h1>This is order now page {productId}</h1>
        </div>
    );
};

export default OrderNow;