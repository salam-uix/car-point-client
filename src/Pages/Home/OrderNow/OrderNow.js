import React from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';

const OrderNow = () => {
    // const { productId } = useParams();
    return (
        <div>
            <Navigation></Navigation>
            <h1>This is order now page</h1>
        </div>
    );
};

export default OrderNow;