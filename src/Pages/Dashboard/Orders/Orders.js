import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const url = ``
        fetch('')
    }, [])
    return (
        <div>
            <h1>My Orders</h1>
        </div>
    );
};

export default Orders;