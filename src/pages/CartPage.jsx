import React from 'react';
import { useCart } from '../context/CartContext';
import CartTable from '../components/cart/CartTable';
import { Typography } from '@mui/material';

const CartPage = () => {

    const { card } = useCart();
    return (
        <div>
            {
                card.products.length > 0 && card !== null ? (
                    <CartTable card={card}/>
                ) : (<Typography>Loading...</Typography>)
            }
        </div>
    );
};

export default CartPage;