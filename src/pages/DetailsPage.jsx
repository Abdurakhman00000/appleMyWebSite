import React, { useEffect } from 'react';
import { useProduct } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import CartBasket from '../components/cart/CartBasket';

const DetailsPage = () => {

    const {oneProduct, getOneProduct} = useProduct()
    const { id } = useParams();

    useEffect(() => {
        getOneProduct(id)
    }, [])
    return (
        <Box>
            <CartBasket oneProduct={oneProduct}/>
        </Box>
    );
};

export default DetailsPage;